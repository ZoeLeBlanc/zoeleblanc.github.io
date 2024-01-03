import os
import yaml
from glob import glob
from tqdm import tqdm

def process_course_file(input_directory_path, output_directory_path):
    # Get all markdown files in the input directory
    markdown_files = sorted(glob(os.path.join(input_directory_path, '*.md')), reverse=True)

    for i, file in tqdm(enumerate(markdown_files, start=1), total=len(markdown_files), desc='Processing course files'):
        with open(file, 'r') as f:
            # Split the file content into parts
            parts = f.read().split('---\n')
            # The first part is the front matter
            front_matter = parts[1]

            # The rest is the main content
            content = '---\n'.join(parts[2:])

            # Load the front matter as a dictionary
            data = yaml.safe_load(front_matter)
            # Reformat the front matter
            new_data = {
                'layout': 'page',
                'title': data['course_title'],
                'subtitle': data['course_subtitle'],
                'year': data['course_year'],
                'semester': data['course_semester'],
                'description': data['course_description'],
                'toc': {'sidebar': 'left'},
                'github': data['course_github'],
                'category': data['course_category'],
                'institution': data['course_institution'],
                'importance': i,
                'website': data['course_website'],
            }
            if data['enable_redirect']:
                new_data['redirect'] = data['course_website']
            # Convert the reformatted front matter back to a string
            new_front_matter = yaml.dump(new_data)

        # Write the reformatted front matter and the main content to a new file
        with open(f'{output_directory_path}/{i}_course.md', 'w') as f:
            f.write('---\n')
            f.write(new_front_matter)
            f.write('---\n')
            f.write(content)

if __name__ == '__main__':
    input_directory_path = "../course_data"
    output_directory_path = '../_courses'
    process_course_file(input_directory_path, output_directory_path)