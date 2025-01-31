import os
import yaml
from glob import glob
from tqdm import tqdm
import pandas as pd

def rank_courses(course_df: pd.DataFrame, current_semester: str) -> pd.DataFrame:
    """
    Ranks courses by importance, where importance is determined by the following:
    1. Graduate courses
    2. Undergraduate courses
    3. Workshops
    4. Most recent courses

    Parameters
    ----------
    course_df : pd.DataFrame
        DataFrame of courses
    current_semester : str
        Current semester (e.g., "Spring")
    
    Returns
    -------
    pd.DataFrame
        DataFrame of courses with an additional column for importance
    """
    teaching_types = ["Graduate", "Undergraduate", "Workshop"]
    semesters = ['Spring', 'Fall'] if current_semester == 'Spring' else ['Fall', 'Spring']
    course_df['semester'] = pd.Categorical(course_df['semester'], categories=semesters, ordered=True)
    course_df['year'] = course_df['year'].astype(int)
    course_df['category'] = pd.Categorical(course_df['category'], categories=teaching_types, ordered=True)
    course_df = course_df.sort_values(by=['category', 'year', 'semester'], ascending=[True, False, False])
    course_df['importance'] = range(1, len(course_df) + 1)
    course_df = course_df.sort_values(by="importance")
    return course_df



def process_course_file(input_directory_path: str, output_directory_path: str, current_semester: str):
    """
    Processes a course file by reformatting the front matter and writing the reformatted front matter and the main content to a new file.

    Parameters
    ----------
    input_directory_path : str
        Path to the input directory
    output_directory_path : str
        Path to the output directory
    current_semester : str
        Current semester (e.g., "Spring")
    """
    # Get all markdown files in the input directory
    markdown_files = sorted(glob(os.path.join(input_directory_path, '*.md')), reverse=True)
    # Create the output directory if it doesn't exist
    os.makedirs(output_directory_path, exist_ok=True)

    courses = []
    for file in tqdm(markdown_files, total=len(markdown_files), desc='Processing course files'):
        with open(file, 'r') as f:
            # Split the file content into parts
            parts = f.read().split('---\n')
            if len(parts) < 2:
                continue
            # The first part is the front matter
            front_matter = parts[1]

            # The rest is the main content
            content = '---\n'.join(parts[2:])
            
            # Load the front matter as a dictionary
            data = yaml.safe_load(front_matter)
            # Get the list of fields from the data dictionary
            fields = list(data.keys())

            new_data = {
                'layout': 'page',
                'toc': {'sidebar': 'left'},
            }

            new_data.update({field.replace('course_', ''): data[field] for field in fields if field in data})
            if data['enable_redirect']:
                new_data['redirect'] = new_data['website'] if 'website' in new_data else new_data['github']
            new_data['content'] = content
            # Convert the reformatted front matter back to a string
            courses.append(new_data)

    course_df = pd.DataFrame(courses)
    course_df = rank_courses(course_df, current_semester)

    for _, row in course_df.iterrows():
        # Drop columns that have all null values
        row = row.dropna()

        front_matter_columns = row.index.tolist()
        front_matter_columns.remove("content")
        new_front_matter = yaml.dump(row[front_matter_columns].to_dict())
        content = row['content']
        i = row['importance']
        # Write the reformatted front matter and the main content to a new file
        with open(f'{output_directory_path}/{i}_course.md', 'w') as f:
            f.write('---\n')
            f.write(new_front_matter)
            f.write('---\n')
            f.write(content)

if __name__ == '__main__':
    input_directory_path = "../course_data"
    output_directory_path = '../_courses'
    current_semester = "Fall"
    process_course_file(input_directory_path, output_directory_path, current_semester)