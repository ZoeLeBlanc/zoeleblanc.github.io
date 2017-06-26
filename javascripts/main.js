"use strict";

$(window).on('load', ()=>{
   $(".button-collapse").sideNav();
    var $year = new Date().getFullYear();
    var statement = '© ' + $year + ' Copyright | Built by Zoe LeBlanc 😄 🍁 ☕';
    $('#year-copyright').append(statement);
    $('select').material_select();
});
if(window.location.toString().includes('research')){
    window.location.replace('http://localhost:8080/projects');
}
$(document).ready( ()=>{
    $(".about-btn").click((event)=>{
        $('#about-blurb').html('');
        if(event.target.id == "about-research"){
            $('#about-blurb').html(
                `<p>My dissertation, Constructing Anti-Colonial Cairo, explores Cairo as a political and media hub for global anti-colonial movements. Using various digital history methods, I analyze Egyptian print media, diplomatic cables for foreign embassies in Cairo, and print media from other anti-colonial capitals to explore both the shifting meanings of anti-colonialism in Cairo and Cairo's influence in the broader anti-colonial world. Ultimately, I'm interested in exploring two threads. First, I trace shifting conceptions of the world order that was tied to discourses of anti-colonialism in Cairo, specifically examining the transformation from political to economic rationales. Second, I explore the relationship(s) between states, liberation movements, and the press - specifically the role of censorship in promoting revolutionary politics.</p>
                <p>I post sporadic updates on my blog about my research and I'm starting to move my workflow to Github, so the lastest updates should be there (hypothetically-- this workflow is still a bit of an experiment). I'm an active member of the Society for Historians of American Foreign Relations and a moderator for the H-Decolonization list-serv. I'm always happy to discuss my ideas or potential collaborations so please reach out to me via email or twitter.</p>`
                );
        }
        if (event.target.id == "about-coding") {
            $('#about-blurb').html(
                `<p>
                Between undergrad and grad school, I serendipitously got a job at a computer repair store, where I was first exposed to all the inner workings of computers. Since then I've been hooked, but until recently coding has been more of a side project. Then I enrolled in the Nashville Software School and my love for writing code turned into a true passion. So now I'm working through how to combine my passions, and also looking for opportunities to further my knowledge of development. </p>

                <p>I'm currently working on two apps, Archivlo and ImageLucida. Archivlo is designed to help researchers who work in archives find new archival collections, manage their archival leads, and share them with other scholars. ImageLucida is designed to help researchers that work with print media to extract images, keeping the meta-data about the images location and analyzing the images at various scales. You can learn more about them on my projects page. If you want to read more, checkout my blog History &amp; Development.
              </p>`
                );
        }
        if (event.target.id=="about-interest") {
            $('#about-blurb').html(
                `<p>
              Scholarly topics that fascinate me (in no particular order):
              <ul>
                <li>
                The roles of the media and the press in constructing political ideas and movements
                </li>
                <li>
                The relationship(s) between states and socio-political movements
                </li>
                <li> 
                The resurgence of religion in the second half of the twentieth century across the globe
                </li>
                <li>
                The power of ideas and ideologies to naturalize and denaturalize 
                </li>
                <li>
                The relationship(s) between space and time for constituting place
                </li>
                <li>
                The use of probablistic statistics to understand historical discourses and events
                </li>
                <li>
                The relationship(s) between local, national, and international
                </li>
                <li>
                The potential for technology to augment historical research
                </li>
                <li>
                Interactivity and data exploration in 2D and 3D
                </li>
                <li>
                Pushing the boundaries of data visualization in the browser
                </li>
              </ul>
              </p>
              <p>
              General interests (in no particular order):
                <ul>
                    <li>Sci-fi and fantasy pop culture (if you need proof hover on the image)
                    </li>
                    <li>Learning new languages and skills
                    </li>
                    <li>Podcasts
                    </li>
                    <li>Dancing
                    </li>
                    <li>Painting
                    </li>
                    <li>My dogs
                    </li>
                </ul>
              </p>
              <p>
              To see more of my current work and thoughts, check out the projects and writings sections of my site. 

             </p>`
                );
        }
    });
});
