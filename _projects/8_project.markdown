---
layout: data
title: Visualizing Cairo's Congo Crisis
description: Digital history project to trace representations of Congo and anti-colonialism, 2019-Present
img: /assets/img/mitch-rosen-203803.jpg
---
<script src="https://cdn.jsdelivr.net/npm/vega@5.7.2"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-lite@4.0.0-beta.10"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-embed@5.1.3"></script>

<div class="wrapper">
    <h1>Visualizing Cairo's Congo Crisis</h1>
    <div class="row">
        <p>
            Visualizing Cairo's Congo Crisis is an interactive, data history of how the Congo Crisis of the 1960s was influenced by *and* influential in Egypt. After the Free Officers' Revolution of 1952, Gamal Abdel Nasser and his coterie of military officers turned bureaucrats sought to make Cairo an international hub for anti-colonial movements and institutions. While the Bandung Conference of 1955, the Suez Crisis of 1956, and the Afro-Asian People's Solidarity Conference of 1957, were all instrumental in making Egypt an international force in decolonization, I argue that the Congo Crisis of 1960 and onwards marked a turning point.<sup id="fnref:1"><a href="#fn:1" class="footnote">1</a></sup> Indeed, the crisis writ large was a “postwar moment of truth” according to Jason Parker, since it challenged the United Nations’ role in “North-South relations” and was a “catalyst for Afro-Asian unity.”<sup id="fnref:2"><a href="#fn:2" class="footnote">1</a></sup> Yet uncovering 
        </p>
    </div>
    <div class="row">
        <h3>Project Background</h3>
        <p>
            Beginning in 2015, at the <a href="https://nationalhistorycenter.org/decolonization-seminar-2015/">International Seminar on Decolonization</a>, I started a project to understand the ways in which the Congo Crisis of the 1960s was influenced by and influential in Egypt. While initially this seminar paper utilized established historical methods,
            eventually became part of my larger dissertation and future book project, but in the interrim, my fluency in computational methods transformed.
        </p>
        <p>
            Beginning in 2015 at the International Seminar on Decolonization, I started a project to understand the ways in which the Congo Crisis of the 1960s was influenced by and influential in Egypt. This seminar eventually became part of my larger dissertation and future book project, but in the interrim, my fluency in computational methods transformed.
        </p>
    </div>
    <div class="row" style="justify-content:center;">
        <p>
        On Monday August 2, 1960, one month after the announcement of Congo’s independence and the subsequent Katanga secession, Egypt, then known as the United Arab Republic, observed Congo Day by hosting a series of mass demonstrations and public meetings throughout Cairo. Organized jointly by the National Union, the primary Egyptian political party and governing body; the African Association; and the Afro-Asian People’s Solidarity Organization (AAPSO), these events lasted two days, and included speeches from Mohamed Fuad Galal, the Deputy Speaker of the Egyptian National Union Assembly; Youssef El Sebai, the Secretary General of the Permanent Secretariat of the AAPSO; and Abdel Rashidov, the USSR delegate to the AAPSO in Cairo, as well as representatives from national liberation movements in Uganda, Algeria, Cameroon, Zanzibar, Northern Rhodesia, Somalia, and Ruanda-Urundi.<sup id="fnref:1"><a href="#fn:1" class="footnote">1</a></sup>
        </p>
        <div>
            <img src="{{ site.baseurl }}/assets/img/congo1.png" alt="Congo Day" style="max-width:100%;" >
        </div>
    </div>
    <div class="row">
        <p>
        The speeches called for Belgium to end its imperialism in Africa, for the United Nations to negotiate the withdrawal of Belgian troops from the Congo, and lastly, for support of Patrice Lumumba to maintain the Congo’s “freedom, unity and sovereignty.”<sup id="fnref:2"><a href="#fn:2" class="footnote">2</a></sup> According to the daily Egyptian newspaper, *al-Ahram*, the rally even sent a cable to Lumumba offering volunteers to fight Belgium imperialists, inspired in part from Cairo’s struggle against imperialist aggression in the Suez Crisis of 1956.   The rally also sent a cable to United Nations Secretary General, Dag Hammarskjöld about Congo Day and the desire for UN involvement in the Congo, claiming to represent all concerned African citizens. The demonstrations eventually dispersed after waiting at the Belgium Embassy for the Ambassador to address “the African freedom fighters.”<sup id="fnref:3"><a href="#fn:3" class="footnote">3</a></sup>
        </p>
        <p>
        While there was some coverage of Congo Day in the Egyptian dallies, the majority of these existing accounts come from the *Arab Observer*, a weekly magazine published by the National Publications House, an initiative of the Egyptian government that started in 1960. The *Arab Observer*, printed in English and modeled on *Newsweek*, was one of eventually dozen Egyptian government publications that were marketed to a new international Arabic and non-Arabic speaking Third World audiences during the 1960s. Yet, the events of Congo Day in Cairo and the existence of magazines like the *Arab Observer* remain marginalized in both national histories of Egypt as well as global histories of the Congo crisis and the Third World. In the few books on Egypt's relations with Africa, only one briefly mentions Congo Day, and while some of these books utilize the Arab Observer as a source, none of them explore how the magazine was part of a larger information strategy intended to export Cairo's message across the globe.  Relative to the entirety of the Congo crisis, the omission of Congo Day in Cairo is minor. Similarly, although Cairo was the capital for print in the Arab world, the Arab Observer represented a fraction of the news published in Cairo. Yet, protests over the Congo would continue to spill on to the streets of Cairo six months later after the murder of Patrice Lumumba and again three years later after American and Belgium involvement in the Simba Rebellion and Stanleyville in late 1964, while Egyptian information regime would become the model for decolonizing states seeking to challenge foreign news coverage, threatening both Western and Soviet interests in the Third World.
        </p>
    </div>
</div>

<div style="display:flex; flex-direction:row;">
    <div id="vis"></div>
    <div style="display:flex; flex-direction:column;">
        <div id="click"></div>
        <div id="dist"></div>
        <div id="clear">
            <button type="button" id="clearTerms" style="background-color: #e7e7e7; color: black;">Clear selected terms</button>
        </div>
    </div>
</div>

<div class="wrapper">
    <div class="footnotes">
    <ol>
        <li id="fn:1">
        <p>For more on the 1957 conference, see Reem Abou-El-Fadl  "Building Egypt’s Afro-Asian Hub: Infrastructures of Solidarity and the 1957 Cairo Conference." *Journal of World History*, 2019. Project MUSE, <a href="doi:10.1353/jwh.2019.0048">doi:10.1353/jwh.2019.0048</a>.&nbsp;<a href="#fnref:1" class="reversefootnote">↩</a></p>
        </li>
        <li id="fn:2">
        <p> Jason C. Parker, Hearts, Minds, Voices: US Cold War Public Diplomacy and the Formation of the Third World. (New York: Oxford University Press, 2016), 144.&nbsp;<a href="#fnref:2" class="reversefootnote">↩</a></p>
        </li>
        <li id="fn:1">
        <p>Speeches mentioned include John Kale, Director of the Uganda Office in Cairo, who was the chairman of the meeting, as well as one by Tewfik Teutora, who represented the Algerian Provisional Government. Embassy Cairo to Department of State, RG 84 Box 9 Folder 310 Afro Asian People’s Solidarity Organization, August 4 1960.&nbsp;<a href="#fnref:1" class="reversefootnote">↩</a></p>
        </li>
        <li id="fn:2">
        <p>Embassy Cairo to Department of State, Aug 4 1960, Folder 310 Afro Asian People’s Solidarity Organization, Box 9, Egypt US Embassy General Records 1959-1961, RG 84&nbsp;<a href="#fnref:2" class="reversefootnote">↩</a></p>
        </li>
    </ol>
    </div>
</div>

<script type="text/javascript">
    var spec = "/visualization.vl.json";
    var spec1 = "/distribution_viz.vg.json";
    let term = '';
    let terms = [];

    $('#clear').click(() => {
        console.log('click');
        terms = [];
        getCounts('');
    });
    var getCounts = (term) => {
        console.log('term', term);
        terms.push(term); 
        // term = 'kennedy';
        $.getJSON("/distribution_years.json", (data) => {
            console.log(data);
            let datasets = data.filter(da => terms.includes(da.term))
            console.log(datasets);
            let changeset = vega.changeset().remove(() => true).insert(datasets);
            console.log(changeset);
            view.change("data-c193be45f4546e6bef5e606183257717", changeset).run()
            let single_term = data.filter(da => da.term == term)[0];
            if (term.length > 0){
                $('#click').text(`Selected Term: ${single_term.term}, non-alignment score: ${(single_term['non-alignedness']).toFixed(3)}`);
            } else {
                $('#click').text(`Select Term`);
            }
        });
    }
    var distGraph = vegaEmbed('#dist', spec1).then(p => window.view = p.view);
    var pointsGraph = vegaEmbed('#vis', spec).then(({spec, view}) => {
        view.addEventListener('click', function (event, item) {
            console.log(item.datum);
            if (item.datum.term.length > 0){
                term = item.datum.term;
                getCounts(term);
            }
        });
    });

</script>
