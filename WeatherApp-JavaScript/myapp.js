function enableSelect(country) {
    document.getElementById('city').disabled = false;
    if (country == 'AFG') {
        document.getElementById('city').innerHTML = '<option value="Ghazni">Ghazni</option><option value="Herat">Herat</option><option value="Jalalabad">Jalalabad</option><option value="Kabul">Kabul</option><option value="Kandahar">Kandahar</option><option value="Kunduz">Kunduz</option><option value="Lashkargah">Lashkargah</option><option value="Mazar-i-Sharif">Mazar-i-Sharif</option><option value="Puli Khumri">Puli Khumri</option><option value="Sheberghan">Sheberghan</option><option value="Taloqan">Taloqan</option><option value="Bamyan">Bamyan</option><option value="Charikar">Charikar</option><option value="Farah">Farah</option><option value="Fayzabad">Fayzabad</option><option value="Ghazni">Ghazni</option><option value="Ghor">Ghor</option><option value="Jalalabad">Jalalabad</option><option value="Kandahar">Kandahar</option><option value="Khost">Khost</option><option value="Kunduz">Kunduz</option><option value="Lashkar Gah">Lashkar Gah</option><option value="Maimana">Maimana</option><option value="Mazar-i-Sharif">Mazar-i-Sharif</option><option value="Pul-e-Khumri">Pul-e-Khumri</option><option value="Samangan">Samangan</option><option value="Sar-e Pol">Sar-e Pol</option><option value="Shibirghan">Shibirghan</option><option value="Taloqan">Taloqan</option><option value="Zaranj">Zaranj</option>';
    }
    if (country == 'ALB') {
        document.getElementById('city').innerHTML = '<option value="Berat">Berat</option><option value="Durrës">Durrës</option><option value="Elbasan">Elbasan</option><option value="Fier">Fier</option><option value="Gjirokastër">Gjirokastër</option><option value="Korçë">Korçë</option><option value="Kukës">Kukës</option><option value="Pogradec">Pogradec</option><option value="Shkodër">Shkodër</option><option value="Tirana">Tirana</option><option value="Vlorë">Vlorë</option><option value="Lushnjë">Lushnjë</option><option value="Kavajë">Kavajë</option><option value="Laç">Laç</option><option value="Krujë">Krujë</option><option value="Lezhë">Lezhë</option><option value="Patos">Patos</option><option value="Kukës">Kukës</option><option value="Sarandë">Sarandë</option><option value="Peshkopi">Peshkopi</option>';
    }
    if (country == 'DZA') {
        document.getElementById('city').innerHTML = '<option value="Algiers">Algiers</option><option value="Oran">Oran</option><option value="Constantine">Constantine</option><option value="Annaba">Annaba</option><option value="Blida">Blida</option><option value="Batna">Batna</option><option value="Djelfa">Djelfa</option><option value="Sétif">Sétif</option><option value="Sidi Bel Abbès">Sidi Bel Abbès</option><option value="Biskra">Biskra</option><option value="Tébessa">Tébessa</option><option value="El Oued">El Oued</option><option value="Skikda">Skikda</option><option value="Tlemcen">Tlemcen</option><option value="Béjaïa">Béjaïa</option><option value="Tiaret">Tiaret</option><option value="Tizi Ouzou">Tizi Ouzou</option><option value="Ouargla">Ouargla</option><option value="Mostaganem">Mostaganem</option><option value="Bordj Bou Arréridj">Bordj Bou Arréridj</option>';
    }
    if (country == 'AND') {
        document.getElementById('city').innerHTML = '<option value="Andorra la Vella">Andorra la Vella</option><option value="Canillo">Canillo</option><option value="Encamp">Encamp</option><option value="Escaldes-Engordany">Escaldes-Engordany</option><option value="La Massana">La Massana</option><option value="Ordino">Ordino</option><option value="Sant Julià de Lòria">Sant Julià de Lòria</option><option value="Arinsal">Arinsal</option><option value="El Tarter">El Tarter</option><option value="Pas de la Casa">Pas de la Casa</option>';
    }
    if (country == 'AGO') {
        document.getElementById('city').innerHTML = '<option value="Luanda">Luanda</option><option value="dalatando">dalatando</option><option value="Huambo">Huambo</option><option value="Benguela">Benguela</option><option value="Kuito">Kuito</option><option value="Lobito">Lobito</option><option value="Lubango">Lubango</option><option value="Malanje">Malanje</option><option value="Namibe">Namibe</option><option value="Soyo">Soyo</option><option value="Cabinda">Cabinda</option><option value="Uíge">Uíge</option><option value="Saurimo">Saurimo</option><option value="Sumbe">Sumbe</option><option value="Menongue">Menongue</option>';
    }
    if (country == 'ARG') {
        document.getElementById('city').innerHTML = '<option value="Buenos Aires">Buenos Aires</option><option value="Córdoba">Córdoba</option><option value="Rosario">Rosario</option><option value="Mendoza">Mendoza</option><option value="San Miguel de Tucumán">San Miguel de Tucumán</option><option value="La Plata">La Plata</option><option value="Mar del Plata">Mar del Plata</option><option value="Salta">Salta</option><option value="Santa Fe">Santa Fe</option><option value="San Juan">San Juan</option><option value="Resistencia">Resistencia</option><option value="Santiago del Estero">Santiago del Estero</option><option value="Corrientes">Corrientes</option><option value="Bahía Blanca">Bahía Blanca</option><option value="San Salvador de Jujuy">San Salvador de Jujuy</option>';
    }
    if (country == 'ARM') {
        document.getElementById('city').innerHTML = '<option value="Yerevan">Yerevan</option><option value="Gyumri">Gyumri</option><option value="Vanadzor">Vanadzor</option><option value="Vagharshapat">Vagharshapat</option><option value="Hrazdan">Hrazdan</option><option value="Abovyan">Abovyan</option><option value="Kapan">Kapan</option><option value="Ararat">Ararat</option><option value="Armavir">Armavir</option><option value="Gavar">Gavar</option><option value="Charentsavan">Charentsavan</option><option value="Artashat">Artashat</option><option value="Sevan">Sevan</option><option value="Spitak">Spitak</option><option value="Masis">Masis</option>';
    }
    if (country == 'AUS') {
        document.getElementById('city').innerHTML = '<option value="Sydney">Sydney</option><option value="Melbourne">Melbourne</option><option value="Brisbane">Brisbane</option><option value="Perth">Perth</option><option value="Adelaide">Adelaide</option><option value="Gold Coast">Gold Coast</option><option value="Canberra">Canberra</option><option value="Newcastle">Newcastle</option><option value="Central Coast">Central Coast</option><option value="Wollongong">Wollongong</option><option value="Hobart">Hobart</option><option value="Geelong">Geelong</option><option value="Townsville">Townsville</option><option value="Cairns">Cairns</option><option value="Toowoomba">Toowoomba</option>';
    }
    if (country == 'AUT') {
        document.getElementById('city').innerHTML = '<option value="Vienna">Vienna</option><option value="Graz">Graz</option><option value="Linz">Linz</option><option value="Salzburg">Salzburg</option><option value="Innsbruck">Innsbruck</option><option value="Klagenfurt">Klagenfurt</option><option value="Villach">Villach</option><option value="Wels">Wels</option><option value="Sankt Pölten">Sankt Pölten</option><option value="Dornbirn">Dornbirn</option><option value="Wiener Neustadt">Wiener Neustadt</option><option value="Steyr">Steyr</option><option value="Feldkirch">Feldkirch</option><option value="Bregenz">Bregenz</option><option value="Leonding">Leonding</option>';
    }
    if (country == 'AZE') {
        document.getElementById('city').innerHTML = '<option value="Baku">Baku</option><option value="Ganja">Ganja</option><option value="Sumqayit">Sumqayit</option><option value="Mingachevir">Mingachevir</option><option value="Lankaran">Lankaran</option><option value="Shirvan">Shirvan</option><option value="Yevlakh">Yevlakh</option><option value="Nakhchivan">Nakhchivan</option><option value="Sheki">Sheki</option><option value="Bilajari">Bilajari</option><option value="Shamakhi">Shamakhi</option><option value="Goychay">Goychay</option><option value="Agdam">Agdam</option><option value="Barda">Barda</option><option value="Khachmaz">Khachmaz</option>';
    }
    if (country == 'BHS') {
        document.getElementById('city').innerHTML = '<option value="Nassau">Nassau</option><option value="Lucaya">Lucaya</option><option value="Freeport">Freeport</option><option value="West End">West End</option><option value="Cooper\'s Town">Cooper\'s Town</option><option value="Marsh Harbour">Marsh Harbour</option><option value="High Rock">High Rock</option><option value="Andros Town">Andros Town</option><option value="Clarence Town">Clarence Town</option><option value="Dunmore Town">Dunmore Town</option><option value="Alice Town">Alice Town</option><option value="Rock Sound">Rock Sound</option><option value="Spanish Wells">Spanish Wells</option><option value="Nichollstown">Nichollstown</option><option value="Matthew Town">Matthew Town</option>';
    }
    if (country == 'BHR') {
        document.getElementById('city').innerHTML = '<option value="Manama">Manama</option><option value="Riffa">Riffa</option><option value="Muharraq">Muharraq</option><option value="Hamad Town">Hamad Town</option><option value="A\'ali">A\'ali</option><option value="Isa Town">Isa Town</option><option value="Sitra">Sitra</option><option value="Budaiya">Budaiya</option><option value="Jidhafs">Jidhafs</option><option value="Al-Malikiyah">Al-Malikiyah</option><option value="Zallaq">Zallaq</option><option value="Al Jasra">Al Jasra</option><option value="Al Dur">Al Dur</option><option value="Al Hidd">Al Hidd</option><option value="Al Qadam">Al Qadam</option>';
    }
    if (country == 'BGD') {
        document.getElementById('city').innerHTML = '<option value="Dhaka">Dhaka</option><option value="Chittagong">Chittagong</option><option value="Khulna">Khulna</option><option value="Rajshahi">Rajshahi</option><option value="Comilla">Comilla</option><option value="Tongi">Tongi</option><option value="Narsingdi">Narsingdi</option><option value="Bogra">Bogra</option><option value="Sylhet">Sylhet</option><option value="Barisal">Barisal</option><option value="Rangpur">Rangpur</option><option value="Mymensingh">Mymensingh</option><option value="Gazipur">Gazipur</option><option value="Narayanganj">Narayanganj</option><option value="Jessore">Jessore</option>';
    }
    if (country == 'BRB') {
        document.getElementById('city').innerHTML = '<option value="Bridgetown">Bridgetown</option><option value="Speightstown">Speightstown</option><option value="Oistins">Oistins</option><option value="Bathsheba">Bathsheba</option><option value="Holetown">Holetown</option><option value="Crane">Crane</option><option value="Blackmans">Blackmans</option><option value="Greenland">Greenland</option><option value="Hillaby">Hillaby</option><option value="Flatfield">Flatfield</option><option value="Saint Lawrence">Saint Lawrence</option><option value="Crab Hill">Crab Hill</option><option value="Silver Sands">Silver Sands</option><option value="Garrison">Garrison</option><option value="Rockley">Rockley</option>';
    }
    if (country == 'BLR') {
        document.getElementById('city').innerHTML = '<option value="Minsk">Minsk</option><option value="Gomel">Gomel</option><option value="Mogilev">Mogilev</option><option value="Vitebsk">Vitebsk</option><option value="Hrodna">Hrodna</option><option value="Brest">Brest</option><option value="Babruysk">Babruysk</option><option value="Baranovichi">Baranovichi</option><option value="Pinsk">Pinsk</option><option value="Orsha">Orsha</option><option value="Mazyr">Mazyr</option><option value="Salihorsk">Salihorsk</option><option value="Navapolatsk">Navapolatsk</option><option value="Lida">Lida</option><option value="Polatsk">Polatsk</option>';
    }
    if (country == 'BEL') {
        document.getElementById('city').innerHTML = '<option value="Brussels">Brussels</option><option value="Antwerp">Antwerp</option><option value="Ghent">Ghent</option><option value="Charleroi">Charleroi</option><option value="Liège">Liège</option><option value="Bruges">Bruges</option><option value="Namur">Namur</option><option value="Leuven">Leuven</option><option value="Mons">Mons</option><option value="Aalst">Aalst</option><option value="Mechelen">Mechelen</option><option value="La Louvière">La Louvière</option><option value="Kortrijk">Kortrijk</option><option value="Hasselt">Hasselt</option><option value="Sint-Niklaas">Sint-Niklaas</option>';
    }
    if (country == 'BLZ') {
        document.getElementById('city').innerHTML = '<option value="Belize City">Belize City</option><option value="San Ignacio">San Ignacio</option><option value="Orange Walk">Orange Walk</option><option value="Belmopan">Belmopan</option><option value="Dangriga">Dangriga</option><option value="Corozal">Corozal</option><option value="Punta Gorda">Punta Gorda</option><option value="Placencia">Placencia</option><option value="Benque Viejo del Carmen">Benque Viejo del Carmen</option><option value="Valley of Peace">Valley of Peace</option><option value="San Pedro">San Pedro</option><option value="Ladyville">Ladyville</option><option value="Caye Caulker">Caye Caulker</option><option value="Hopkins">Hopkins</option><option value="Independence">Independence</option>';
    }
    if (country == 'BEN') {
        document.getElementById('city').innerHTML = '<option value="Porto-Novo">Porto-Novo</option><option value="Cotonou">Cotonou</option><option value="Abomey-Calavi">Abomey-Calavi</option><option value="Parakou">Parakou</option><option value="Djougou">Djougou</option><option value="Bohicon">Bohicon</option><option value="Kandi">Kandi</option><option value="Lokossa">Lokossa</option><option value="Ouidah">Ouidah</option><option value="Abomey">Abomey</option><option value="Natitingou">Natitingou</option><option value="Savé">Savé</option><option value="Nikki">Nikki</option><option value="Dogbo">Dogbo</option><option value="Pobé">Pobé</option>';
    }
    if (country == 'BTN') {
        document.getElementById('city').innerHTML = '<option value="Thimphu">Thimphu</option><option value="Phuntsholing">Phuntsholing</option><option value="Punakha">Punakha</option><option value="Tsirang">Tsirang</option><option value="Paro">Paro</option><option value="Jakar">Jakar</option><option value="Ha">Ha</option><option value="Mongar">Mongar</option><option value="Pemagatshel">Pemagatshel</option><option value="Trashigang">Trashigang</option><option value="Trongsa">Trongsa</option><option value="Wangdue Phodrang">Wangdue Phodrang</option><option value="Gelephu">Gelephu</option><option value="Samdrup Jongkhar">Samdrup Jongkhar</option><option value="Zhemgang">Zhemgang</option>';
    }
    if (country == 'BOL') {
        document.getElementById('city').innerHTML = '<option value="La Paz">La Paz</option><option value="Sucre">Sucre</option><option value="El Alto">El Alto</option><option value="Cochabamba">Cochabamba</option><option value="Oruro">Oruro</option><option value="Santa Cruz de la Sierra">Santa Cruz de la Sierra</option><option value="Potosí">Potosí</option><option value="Tarija">Tarija</option><option value="Sacaba">Sacaba</option><option value="Quillacollo">Quillacollo</option><option value="Montero">Montero</option><option value="Trinidad">Trinidad</option><option value="Yacuiba">Yacuiba</option><option value="Riberalta">Riberalta</option><option value="Guayaramerín">Guayaramerín</option>';
    }
    if (country == 'BIH') {
        document.getElementById('city').innerHTML = '<option value="Sarajevo">Sarajevo</option><option value="Banja Luka">Banja Luka</option><option value="Tuzla">Tuzla</option><option value="Zenica">Zenica</option><option value="Mostar">Mostar</option><option value="Bijeljina">Bijeljina</option><option value="Prijedor">Prijedor</option><option value="Brčko">Brčko</option><option value="Travnik">Travnik</option><option value="Doboj">Doboj</option><option value="Cazin">Cazin</option><option value="Bihać">Bihać</option><option value="Gradačac">Gradačac</option><option value="Zvornik">Zvornik</option><option value="Gračanica">Gračanica</option>';
    }
    if (country == 'BWA') {
        document.getElementById('city').innerHTML = '<option value="Gaborone">Gaborone</option><option value="Francistown">Francistown</option><option value="Molepolole">Molepolole</option><option value="Serowe">Serowe</option><option value="Selibe Phikwe">Selibe Phikwe</option><option value="Maun">Maun</option><option value="Kanye">Kanye</option><option value="Mahalapye">Mahalapye</option><option value="Mogoditshane">Mogoditshane</option><option value="Mochudi">Mochudi</option><option value="Lobatse">Lobatse</option><option value="Palapye">Palapye</option><option value="Ramotswa">Ramotswa</option><option value="Thamaga">Thamaga</option><option value="Letlhakane">Letlhakane</option>';
    }
    if (country == 'BRA') {
        document.getElementById('city').innerHTML = '<option value="São Paulo">São Paulo</option><option value="Rio de Janeiro">Rio de Janeiro</option><option value="Salvador">Salvador</option><option value="Brasília">Brasília</option><option value="Fortaleza">Fortaleza</option><option value="Belo Horizonte">Belo Horizonte</option><option value="Manaus">Manaus</option><option value="Curitiba">Curitiba</option><option value="Recife">Recife</option><option value="Goiânia">Goiânia</option><option value="Belém">Belém</option><option value="Porto Alegre">Porto Alegre</option><option value="Guarulhos">Guarulhos</option><option value="Campinas">Campinas</option><option value="São Luís">São Luís</option>';
    }
    if (country == 'BRN') {
        document.getElementById('city').innerHTML = '<option value="Bandar Seri Begawan">Bandar Seri Begawan</option><option value="Kuala Belait">Kuala Belait</option><option value="Seria">Seria</option><option value="Tutong">Tutong</option><option value="Bangar">Bangar</option><option value="Jerudong">Jerudong</option><option value="Muara">Muara</option><option value="Sukang">Sukang</option><option value="Labi">Labi</option><option value="Sungai Liang">Sungai Liang</option>';
    }
    if (country == 'BGR') {
        document.getElementById('city').innerHTML = '<option value="Sofia">Sofia</option><option value="Plovdiv">Plovdiv</option><option value="Varna">Varna</option><option value="Burgas">Burgas</option><option value="Ruse">Ruse</option><option value="Stara Zagora">Stara Zagora</option><option value="Pleven">Pleven</option><option value="Sliven">Sliven</option><option value="Dobrich">Dobrich</option><option value="Shumen">Shumen</option><option value="Pernik">Pernik</option><option value="Haskovo">Haskovo</option><option value="Yambol">Yambol</option><option value="Blagoevgrad">Blagoevgrad</option><option value="Veliko Tarnovo">Veliko Tarnovo</option>';
    }
    if (country == 'BFA') {
        document.getElementById('city').innerHTML = '<option value="Ouagadougou">Ouagadougou</option><option value="Bobo-Dioulasso">Bobo-Dioulasso</option><option value="Koudougou">Koudougou</option><option value="Ouahigouya">Ouahigouya</option><option value="Banfora">Banfora</option><option value="Dédougou">Dédougou</option><option value="Kaya">Kaya</option><option value="Tenkodogo">Tenkodogo</option><option value="Fada gourma">Fada gourma</option><option value="Dori">Dori</option><option value="Houndé">Houndé</option><option value="Koupéla">Koupéla</option><option value="Réo">Réo</option><option value="Pouytenga">Pouytenga</option><option value="Garango">Garango</option>';
    }
    if (country == 'BDI') {
        document.getElementById('city').innerHTML = '<option value="Bujumbura">Bujumbura</option><option value="Muyinga">Muyinga</option><option value="Ruyigi">Ruyigi</option><option value="Gitega">Gitega</option><option value="Ngozi">Ngozi</option><option value="Rutana">Rutana</option><option value="Bururi">Bururi</option><option value="Makamba">Makamba</option><option value="Kayanza">Kayanza</option><option value="Muramvya">Muramvya</option><option value="Cibitoke">Cibitoke</option><option value="Bubanza">Bubanza</option><option value="Karusi">Karusi</option><option value="Kirundo">Kirundo</option><option value="Mwaro">Mwaro</option>';
    }
    if (country == 'CPV') {
        document.getElementById('city').innerHTML = '<option value="Praia">Praia</option><option value="Mindelo">Mindelo</option><option value="Santa Maria">Santa Maria</option><option value="Cova Figueira">Cova Figueira</option><option value="Tarrafal">Tarrafal</option><option value="Assomada">Assomada</option><option value="Porto Novo">Porto Novo</option><option value="Vila do Maio">Vila do Maio</option><option value="Vila da Ribeira Brava">Vila da Ribeira Brava</option><option value="Vila do Porto Inglês">Vila do Porto Inglês</option><option value="Sal Rei">Sal Rei</option><option value="Ponta do Sol">Ponta do Sol</option><option value="Ribeira Grande">Ribeira Grande</option><option value="Espargos">Espargos</option><option value="São Filipe">São Filipe</option>';
    }
    if (country == 'KHM') {
        document.getElementById('city').innerHTML = '<option value="Phnom Penh">Phnom Penh</option><option value="Battambang">Battambang</option><option value="Siem Reap">Siem Reap</option><option value="Sihanoukville">Sihanoukville</option><option value="Poipet">Poipet</option><option value="Kampong Cham">Kampong Cham</option><option value="Kampong Speu">Kampong Speu</option><option value="Kampong Thom">Kampong Thom</option><option value="Kampot">Kampot</option><option value="Koh Kong">Koh Kong</option><option value="Pursat">Pursat</option><option value="Takeo">Takeo</option><option value="Svay Rieng">Svay Rieng</option><option value="Prey Veng">Prey Veng</option><option value="Stung Treng">Stung Treng</option>';
    }
    if (country == 'CMR') {
        document.getElementById('city').innerHTML = '<option value="Douala">Douala</option><option value="Yaoundé">Yaoundé</option><option value="Garoua">Garoua</option><option value="Bamenda">Bamenda</option><option value="Maroua">Maroua</option><option value="Bafoussam">Bafoussam</option><option value="Mokolo">Mokolo</option><option value="Ngaoundéré">Ngaoundéré</option><option value="Bertoua">Bertoua</option><option value="Ebolowa">Ebolowa</option><option value="Kumba">Kumba</option><option value="Nkongsamba">Nkongsamba</option><option value="Buea">Buea</option><option value="Foumban">Foumban</option><option value="Mbouda">Mbouda</option>';
    }
    if (country == 'CAN') {
        document.getElementById('city').innerHTML = '<option value="Toronto">Toronto</option><option value="Montreal">Montreal</option><option value="Vancouver">Vancouver</option><option value="Calgary">Calgary</option><option value="Edmonton">Edmonton</option><option value="Ottawa">Ottawa</option><option value="Winnipeg">Winnipeg</option><option value="Québec">Québec</option><option value="Hamilton">Hamilton</option><option value="Kitchener">Kitchener</option><option value="London">London</option><option value="Victoria">Victoria</option><option value="Halifax">Halifax</option><option value="Oshawa">Oshawa</option><option value="Windsor">Windsor</option>';
    }
    if (country == 'CAF') {
        document.getElementById('city').innerHTML = '<option value="Bangui">Bangui</option><option value="Bimbo">Bimbo</option><option value="Mbaïki">Mbaïki</option><option value="Berbérati">Berbérati</option><option value="Kaga-Bandoro">Kaga-Bandoro</option><option value="Bozoum">Bozoum</option><option value="Carnot">Carnot</option><option value="Sibut">Sibut</option><option value="Bambari">Bambari</option><option value="Bria">Bria</option><option value="Bossangoa">Bossangoa</option><option value="Nola">Nola</option><option value="Bangassou">Bangassou</option><option value="Damara">Damara</option><option value="Mobaye">Mobaye</option>';
    }
    if (country == 'TCD') {
        document.getElementById('city').innerHTML = '<option value="N\'Djamena">N\'Djamena</option><option value="Moundou">Moundou</option><option value="Sarh">Sarh</option><option value="Abeche">Abeche</option><option value="Kelo">Kelo</option><option value="Koumra">Koumra</option><option value="Pala">Pala</option><option value="Am Timan">Am Timan</option><option value="Bongor">Bongor</option><option value="Mongo">Mongo</option><option value="Doba">Doba</option><option value="Faya-Largeau">Faya-Largeau</option><option value="Ati">Ati</option><option value="Oum Hadjer">Oum Hadjer</option><option value="Bitkine">Bitkine</option>';
    }
    if (country == 'CHL') {
        document.getElementById('city').innerHTML = '<option value="Santiago">Santiago</option><option value="Puente Alto">Puente Alto</option><option value="Antofagasta">Antofagasta</option><option value="Viña del Mar">Viña del Mar</option><option value="Valparaíso">Valparaíso</option><option value="Talcahuano">Talcahuano</option><option value="San Bernardo">San Bernardo</option><option value="Temuco">Temuco</option><option value="Concepción">Concepción</option><option value="Rancagua">Rancagua</option><option value="Iquique">Iquique</option><option value="Talca">Talca</option><option value="Arica">Arica</option><option value="Coquimbo">Coquimbo</option><option value="La Serena">La Serena</option>';
    }
    if (country == 'CHN') {
        document.getElementById('city').innerHTML = '<option value="Shanghai">Shanghai</option><option value="Beijing">Beijing</option><option value="Guangzhou">Guangzhou</option><option value="Shenzhen">Shenzhen</option><option value="Wuhan">Wuhan</option><option value="Dongguan">Dongguan</option><option value="Chongqing">Chongqing</option><option value="Chengdu">Chengdu</option><option value="Nanjing">Nanjing</option><option value="Tianjin">Tianjin</option><option value="Hangzhou">Hangzhou</option><option value="Xi\'an">Xi\'an</option><option value="Shenyang">Shenyang</option><option value="Harbin">Harbin</option><option value="Suzhou">Suzhou</option>';
    }
    if (country == 'COL') {
        document.getElementById('city').innerHTML = '<option value="Bogotá">Bogotá</option><option value="Medellín">Medellín</option><option value="Cali">Cali</option><option value="Barranquilla">Barranquilla</option><option value="Cartagena">Cartagena</option><option value="Cúcuta">Cúcuta</option><option value="Soledad">Soledad</option><option value="Ibagué">Ibagué</option><option value="Bucaramanga">Bucaramanga</option><option value="Soacha">Soacha</option><option value="Santa Marta">Santa Marta</option><option value="Villavicencio">Villavicencio</option><option value="Pereira">Pereira</option><option value="Manizales">Manizales</option><option value="Valledupar">Valledupar</option>';
    }
    if (country == 'COM') {
        document.getElementById('city').innerHTML = '<option value="Moroni">Moroni</option><option value="Mutsamudu">Mutsamudu</option><option value="Fomboni">Fomboni</option><option value="Domoni">Domoni</option><option value="Sima">Sima</option><option value="Ouani">Ouani</option><option value="Mirontsi">Mirontsi</option><option value="Koni-Djodjo">Koni-Djodjo</option><option value="Moya">Moya</option><option value="Mramani">Mramani</option><option value="Nioumachoua">Nioumachoua</option><option value="Bimbini">Bimbini</option><option value="Mitsamiouli">Mitsamiouli</option><option value="Iconi">Iconi</option><option value="Itsandra">Itsandra</option>';
    }
    if (country == 'CRI') {
        document.getElementById('city').innerHTML = '<option value="San José">San José</option><option value="Puerto Limón">Puerto Limón</option><option value="San Francisco">San Francisco</option><option value="Alajuela">Alajuela</option><option value="Liberia">Liberia</option><option value="Paraíso">Paraíso</option><option value="Puntarenas">Puntarenas</option><option value="San Isidro">San Isidro</option><option value="Curridabat">Curridabat</option><option value="San Vicente">San Vicente</option><option value="Heredia">Heredia</option><option value="San Rafael">San Rafael</option><option value="Quesada">Quesada</option><option value="San Felipe">San Felipe</option><option value="Cartago">Cartago</option>';
    }
    if (country == 'HRV') {
        document.getElementById('city').innerHTML = '<option value="Zagreb">Zagreb</option><option value="Split">Split</option><option value="Rijeka">Rijeka</option><option value="Osijek">Osijek</option><option value="Zadar">Zadar</option><option value="Slavonski Brod">Slavonski Brod</option><option value="Pula">Pula</option><option value="Karlovac">Karlovac</option><option value="Sisak">Sisak</option><option value="Vinkovci">Vinkovci</option><option value="Vukovar">Vukovar</option><option value="Šibenik">Šibenik</option><option value="Dubrovnik">Dubrovnik</option><option value="Čakovec">Čakovec</option><option value="Bjelovar">Bjelovar</option>';
    }
    if (country == 'CUB') {
        document.getElementById('city').innerHTML = '<option value="Havana">Havana</option><option value="Santiago de Cuba">Santiago de Cuba</option><option value="Camagüey">Camagüey</option><option value="Holguín">Holguín</option><option value="Guantánamo">Guantánamo</option><option value="Santa Clara">Santa Clara</option><option value="Las Tunas">Las Tunas</option><option value="Bayamo">Bayamo</option><option value="Cienfuegos">Cienfuegos</option><option value="Pinar del Río">Pinar del Río</option><option value="Matanzas">Matanzas</option><option value="Ciego de Ávila">Ciego de Ávila</option><option value="Sancti Spíritus">Sancti Spíritus</option><option value="Manzanillo">Manzanillo</option><option value="Placetas">Placetas</option>';
    }
    if (country == 'CYP') {
        document.getElementById('city').innerHTML = '<option value="Nicosia">Nicosia</option><option value="Limassol">Limassol</option><option value="Larnaca">Larnaca</option><option value="Famagusta">Famagusta</option><option value="Paphos">Paphos</option><option value="Kyrenia">Kyrenia</option><option value="Protaras">Protaras</option><option value="Polis">Polis</option><option value="Kakopetria">Kakopetria</option><option value="Latsia">Latsia</option><option value="Paralimni">Paralimni</option><option value="Ayia Napa">Ayia Napa</option><option value="Dali">Dali</option><option value="Geroskipou">Geroskipou</option><option value="Strovolos">Strovolos</option>';
    }
    if (country == 'CZE') {
        document.getElementById('city').innerHTML = '<option value="Prague">Prague</option><option value="Brno">Brno</option><option value="Ostrava">Ostrava</option><option value="Plzeň">Plzeň</option><option value="Liberec">Liberec</option><option value="Olomouc">Olomouc</option><option value="Ústí nad Labem">Ústí nad Labem</option><option value="Hradec Králové">Hradec Králové</option><option value="České Budějovice">České Budějovice</option><option value="Pardubice">Pardubice</option><option value="Zlín">Zlín</option><option value="Havířov">Havířov</option><option value="Kladno">Kladno</option><option value="Most">Most</option><option value="Opava">Opava</option><option value="Frýdek-Místek">Frýdek-Místek</option><option value="Karviná">Karviná</option><option value="Jihlava">Jihlava</option><option value="Teplice">Teplice</option><option value="Děčín">Děčín</option>';
    }
    if (country == 'DNK') {
        document.getElementById('city').innerHTML = '<option value="Copenhagen">Copenhagen</option><option value="Aarhus">Aarhus</option><option value="Odense">Odense</option><option value="Aalborg">Aalborg</option><option value="Esbjerg">Esbjerg</option><option value="Randers">Randers</option><option value="Kolding">Kolding</option><option value="Horsens">Horsens</option><option value="Vejle">Vejle</option><option value="Roskilde">Roskilde</option><option value="Helsingør">Helsingør</option><option value="Silkeborg">Silkeborg</option><option value="Næstved">Næstved</option><option value="Fredericia">Fredericia</option><option value="Hillerød">Hillerød</option><option value="Sønderborg">Sønderborg</option><option value="Svendborg">Svendborg</option><option value="Holstebro">Holstebro</option><option value="Taastrup">Taastrup</option><option value="Slagelse">Slagelse</option>';
    }
    if (country == 'DJI') {
        document.getElementById('city').innerHTML = '<option value="Djibouti">Djibouti</option><option value="Ali Sabieh">Ali Sabieh</option><option value="Dikhil">Dikhil</option><option value="Tadjoura">Tadjoura</option><option value="Obock">Obock</option><option value="Arta">Arta</option><option value="Holhol">Holhol</option><option value="Dorra">Dorra</option><option value="Galafi">Galafi</option><option value="Loyada">Loyada</option><option value="Balho">Balho</option><option value="Yoboki">Yoboki</option><option value="Randa">Randa</option><option value="Moulhoule">Moulhoule</option>';
    }
    if (country == 'DMA') {
        document.getElementById('city').innerHTML = '<option value="Roseau">Roseau</option><option value="Portsmouth">Portsmouth</option><option value="Marigot">Marigot</option><option value="Berekua">Berekua</option><option value="Mahaut">Mahaut</option><option value="Saint Joseph">Saint Joseph</option><option value="La Plaine">La Plaine</option><option value="Grand Fond">Grand Fond</option><option value="Castle Bruce">Castle Bruce</option><option value="Soufrière">Soufrière</option><option value="Atkinson">Atkinson</option><option value="Calibishie">Calibishie</option><option value="Colihaut">Colihaut</option><option value="Coulibistrie">Coulibistrie</option><option value="Delices">Delices</option><option value="Good Hope">Good Hope</option><option value="Morne Prosper">Morne Prosper</option><option value="Penville">Penville</option><option value="Salisbury">Salisbury</option><option value="Scotts Head">Scotts Head</option><option value="Vieille Case">Vieille Case</option>';
    }
    if (country == 'DOM') {
        document.getElementById('city').innerHTML = '<option value="Santo Domingo">Santo Domingo</option><option value="Santiago de los Caballeros">Santiago de los Caballeros</option><option value="Santo Domingo Este">Santo Domingo Este</option><option value="San Pedro de Macorís">San Pedro de Macorís</option><option value="La Romana">La Romana</option><option value="San Cristóbal">San Cristóbal</option><option value="Puerto Plata">Puerto Plata</option><option value="San Francisco de Macorís">San Francisco de Macorís</option><option value="Salvaleón de Higüey">Salvaleón de Higüey</option><option value="La Vega">La Vega</option><option value="Moca">Moca</option><option value="Bonao">Bonao</option><option value="Baní">Baní</option><option value="Azua">Azua</option><option value="Villa Altagracia">Villa Altagracia</option><option value="San Juan de la Maguana">San Juan de la Maguana</option><option value="Hato Mayor del Rey">Hato Mayor del Rey</option><option value="San Fernando de Monte Cristi">San Fernando de Monte Cristi</option><option value="Nagua">Nagua</option><option value="Cotui">Cotui</option><option value="Samaná">Samaná</option><option value="Boca Chica">Boca Chica</option><option value="Jarabacoa">Jarabacoa</option><option value="Constanza">Constanza</option><option value="Dajabón">Dajabón</option><option value="El Seibo">El Seibo</option><option value="Esperanza">Esperanza</option><option value="Higuey">Higuey</option><option value="Jimani">Jimani</option><option value="Las Matas de Farfán">Las Matas de Farfán</option><option value="Mao">Mao</option><option value="Monte Plata">Monte Plata</option><option value="Neiba">Neiba</option><option value="Pedernales">Pedernales</option><option value="Salcedo">Salcedo</option><option value="Sánchez">Sánchez</option><option value="Santa Cruz de Barahona">Santa Cruz de Barahona</option><option value="Sosúa">Sosúa</option><option value="Tamboril">Tamboril</option><option value="Villa Bisonó">Villa Bisonó</option><option value="Villa Consuelo">Villa Consuelo</option><option value="Villa González">Villa González</option><option value="Villa Riva">Villa Riva</option><option value="Yamasá">Yamasá</option>';
    }
    if (country == 'ECU') {
        document.getElementById('city').innerHTML = '<option value="Quito">Quito</option><option value="Guayaquil">Guayaquil</option><option value="Cuenca">Cuenca</option><option value="Santo Domingo de los Colorados">Santo Domingo de los Colorados</option><option value="Machala">Machala</option><option value="Manta">Manta</option><option value="Portoviejo">Portoviejo</option><option value="Duran">Duran</option><option value="Loja">Loja</option><option value="Ambato">Ambato</option><option value="Esmeraldas">Esmeraldas</option><option value="Quevedo">Quevedo</option><option value="Riobamba">Riobamba</option><option value="Milagro">Milagro</option><option value="Ibarra">Ibarra</option>';
    }
    if (country == 'EGY') {
        document.getElementById('city').innerHTML = '<option value="Cairo">Cairo</option><option value="Alexandria">Alexandria</option><option value="Giza">Giza</option><option value="Shubra El-Kheima">Shubra El-Kheima</option><option value="Port Said">Port Said</option><option value="Suez">Suez</option><option value="Luxor">Luxor</option><option value="al-Mansura">al-Mansura</option><option value="El-Mahalla El-Kubra">El-Mahalla El-Kubra</option><option value="Tanta">Tanta</option><option value="Asyut">Asyut</option><option value="Ismailia">Ismailia</option><option value="Faiyum">Faiyum</option><option value="Zagazig">Zagazig</option><option value="Aswan">Aswan</option><option value="Damietta">Damietta</option><option value="Damanhur">Damanhur</option><option value="Minya">Minya</option><option value="Beni Suef">Beni Suef</option><option value="Qena">Qena</option><option value="Sohag">Sohag</option><option value="Hurghada">Hurghada</option><option value="6th of October City">6th of October City</option><option value="Shibin El Kom">Shibin El Kom</option><option value="Banha">Banha</option><option value="Kafr El Sheikh">Kafr El Sheikh</option><option value="Arish">Arish</option><option value="Mallawi">Mallawi</option><option value="10th of Ramadan City">10th of Ramadan City</option><option value="Bilbais">Bilbais</option><option value="Marsa Matruh">Marsa Matruh</option><option value="Idfu">Idfu</option><option value="Mit Ghamr">Mit Ghamr</option><option value="Al-Hamidiyya">Al-Hamidiyya</option><option value="Desouk">Desouk</option><option value="Qalyub">Qalyub</option><option value="Abu Kabir">Abu Kabir</option><option value="Kafr El Dawwar">Kafr El Dawwar</option><option value="Girga">Girga</option><option value="Akhmim">Akhmim</option><option value="Matareya">Matareya</option><option value="Manfalut">Manfalut</option><option value="Qaha">Qaha</option><option value="New Cairo">New Cairo</option>';
    }
    if (country == 'SLV') {
        document.getElementById('city').innerHTML = '<option value="San Salvador">San Salvador</option><option value="Soyapango">Soyapango</option><option value="Santa Ana">Santa Ana</option><option value="San Miguel">San Miguel</option><option value="Mejicanos">Mejicanos</option><option value="Apopa">Apopa</option><option value="Delgado">Delgado</option><option value="Sonsonate">Sonsonate</option><option value="San Marcos">San Marcos</option><option value="Usulután">Usulután</option><option value="Cojutepeque">Cojutepeque</option><option value="Zacatecoluca">Zacatecoluca</option><option value="Ahuachapán">Ahuachapán</option><option value="Ilopango">Ilopango</option><option value="San Vicente">San Vicente</option><option value="Chalchuapa">Chalchuapa</option><option value="Quezaltepeque">Quezaltepeque</option><option value="La Libertad">La Libertad</option><option value="Ayutuxtepeque">Ayutuxtepeque</option><option value="Cuscatancingo">Cuscatancingo</option>';
    }
    if (country == 'GNQ') {
        document.getElementById('city').innerHTML = '<option value="Malabo">Malabo</option><option value="Bata">Bata</option><option value="Ebebiyin">Ebebiyin</option><option value="Aconibe">Aconibe</option><option value="Anisoc">Anisoc</option><option value="Luba">Luba</option><option value="Evinayong">Evinayong</option><option value="Mongomo">Mongomo</option><option value="Mikomeseng">Mikomeseng</option><option value="Rebola">Rebola</option><option value="Nsok">Nsok</option><option value="Mbini">Mbini</option><option value="Cogo">Cogo</option><option value="Añisoc">Añisoc</option><option value="Niefang">Niefang</option>';
    }
    if (country == 'ERI') {
        document.getElementById('city').innerHTML = '<option value="Asmara">Asmara</option><option value="Keren">Keren</option><option value="Massawa">Massawa</option><option value="Assab">Assab</option><option value="Mendefera">Mendefera</option><option value="Barentu">Barentu</option><option value="Adi Keyh">Adi Keyh</option><option value="Edd">Edd</option><option value="Dekemhare">Dekemhare</option><option value="Akordat">Akordat</option><option value="Teseney">Teseney</option><option value="Senafe">Senafe</option><option value="Ghinda">Ghinda</option><option value="Adobha">Adobha</option><option value="Tsorona-Zalambessa">Tsorona-Zalambessa</option>';
    }
    if (country == 'EST') {
        document.getElementById('city').innerHTML = '<option value="Tallinn">Tallinn</option><option value="Tartu">Tartu</option><option value="Narva">Narva</option><option value="Pärnu">Pärnu</option><option value="Kohtla-Järve">Kohtla-Järve</option><option value="Viljandi">Viljandi</option><option value="Rakvere">Rakvere</option><option value="Maardu">Maardu</option><option value="Kuressaare">Kuressaare</option><option value="Sillamäe">Sillamäe</option><option value="Võru">Võru</option><option value="Valga">Valga</option><option value="Jõhvi">Jõhvi</option>';
    }
    if (country == 'SWZ') {
        document.getElementById('city').innerHTML = '<option value="Mbabane">Mbabane</option><option value="Manzini">Manzini</option><option value="Lobamba">Lobamba</option><option value="Siteki">Siteki</option><option value="Piggs Peak">Piggs Peak</option><option value="Mhlume">Mhlume</option><option value="Hluti">Hluti</option><option value="Simunye">Simunye</option><option value="Big Bend">Big Bend</option><option value="Malkerns">Malkerns</option><option value="Nhlangano">Nhlangano</option><option value="Hlatikulu">Hlatikulu</option><option value="Matsapha">Matsapha</option><option value="Bhunya">Bhunya</option><option value="Luyengo">Luyengo</option>';
    }
    if (country == 'ETH') {
        document.getElementById('city').innerHTML = '<option value="Addis Ababa">Addis Ababa</option><option value="Dire Dawa">Dire Dawa</option><option value="Mek\'ele">Mek\'ele</option><option value="Gondar">Gondar</option><option value="Adama">Adama</option><option value="Awasa">Awasa</option><option value="Bahir Dar">Bahir Dar</option><option value="Jimma">Jimma</option><option value="Hawassa">Hawassa</option><option value="Dessie">Dessie</option><option value="Jijiga">Jijiga</option><option value="Shashamane">Shashamane</option><option value="Bishoftu">Bishoftu</option><option value="Arba Minch">Arba Minch</option><option value="Hosaena">Hosaena</option>';
    }
    if (country == 'FJI') {
        document.getElementById('city').innerHTML = '<option value="Suva">Suva</option><option value="Lautoka">Lautoka</option><option value="Nadi">Nadi</option><option value="Labasa">Labasa</option><option value="Ba">Ba</option><option value="Levuka">Levuka</option><option value="Savusavu">Savusavu</option><option value="Tavua">Tavua</option><option value="Rakiraki">Rakiraki</option><option value="Nausori">Nausori</option><option value="Sigatoka">Sigatoka</option><option value="Navua">Navua</option><option value="Korovou">Korovou</option><option value="Taveuni">Taveuni</option><option value="Kadavu">Kadavu</option>';
    }
    if (country == 'FIN') {
        document.getElementById('city').innerHTML = '<option value="Helsinki">Helsinki</option><option value="Espoo">Espoo</option><option value="Tampere">Tampere</option><option value="Vantaa">Vantaa</option><option value="Oulu">Oulu</option><option value="Turku">Turku</option><option value="Jyväskylä">Jyväskylä</option><option value="Lahti">Lahti</option><option value="Kuopio">Kuopio</option><option value="Pori">Pori</option><option value="Lappeenranta">Lappeenranta</option><option value="Vaasa">Vaasa</option><option value="Kotka">Kotka</option><option value="Joensuu">Joensuu</option><option value="Hämeenlinna">Hämeenlinna</option><option value="Porvoo">Porvoo</option><option value="Mikkeli">Mikkeli</option><option value="Hyvinkää">Hyvinkää</option><option value="Järvenpää">Järvenpää</option><option value="Nurmijärvi">Nurmijärvi</option><option value="Rauma">Rauma</option><option value="Lohja">Lohja</option><option value="Kokkola">Kokkola</option><option value="Kajaani">Kajaani</option><option value="Rovaniemi">Rovaniemi</option><option value="Tuusula">Tuusula</option><option value="Kirkkonummi">Kirkkonummi</option><option value="Seinäjoki">Seinäjoki</option><option value="Kerava">Kerava</option><option value="Kouvola">Kouvola</option><option value="Imatra">Imatra</option><option value="Nokia">Nokia</option><option value="Savonlinna">Savonlinna</option><option value="Riihimäki">Riihimäki</option><option value="Vihti">Vihti</option><option value="Salo">Salo</option><option value="Kangasala">Kangasala</option><option value="Raisio">Raisio</option><option value="Karhula">Karhula</option><option value="Kemi">Kemi</option><option value="Iisalmi">Iisalmi</option><option value="Varkaus">Varkaus</option><option value="Raahe">Raahe</option><option value="Ylöjärvi">Ylöjärvi</option><option value="Hamina">Hamina</option><option value="Kaarina">Kaarina</option><option value="Tornio">Tornio</option><option value="Heinola">Heinola</option><option value="Hollola">Hollola</option><option value="Valkeakoski">Valkeakoski</option><option value="Siilinjärvi">Siilinjärvi</option><option value="Kuusankoski">Kuusankoski</option><option value="Sibbo">Sibbo</option><option value="Pargas">Pargas</option><option value="Kempele">Kempele</option><option value="Lapua">Lapua</option><option value="Kontiolahti">Kontiolahti</option><option value="Kankaanpää">Kankaanpää</option><option value="Uusikaupunki">Uusikaupunki</option><option value="Janakkala">Janakkala</option><option value="Pirkkala">Pirkkala</option><option value="Laukaa">Laukaa</option><option value="Pedersören kunta">Pedersören kunta</option><option value="Kasnäs">Kasnäs</option>';
    }
    if (country == 'FRA') {
        document.getElementById('city').innerHTML = '<option value="Paris">Paris</option><option value="Marseille">Marseille</option><option value="Lyon">Lyon</option><option value="Toulouse">Toulouse</option><option value="Nice">Nice</option><option value="Nantes">Nantes</option><option value="Strasbourg">Strasbourg</option><option value="Montpellier">Montpellier</option><option value="Bordeaux">Bordeaux</option><option value="Lille">Lille</option><option value="Rennes">Rennes</option><option value="Reims">Reims</option><option value="Le Havre">Le Havre</option><option value="Saint-Étienne">Saint-Étienne</option><option value="Toulon">Toulon</option><option value="Angers">Angers</option><option value="Grenoble">Grenoble</option><option value="Dijon">Dijon</option><option value="Nîmes">Nîmes</option><option value="Aix-en-Provence">Aix-en-Provence</option><option value="Saint-Quentin">Saint-Quentin</option><option value="Brest">Brest</option><option value="Limoges">Limoges</option><option value="Tours">Tours</option><option value="Amiens">Amiens</option><option value="Perpignan">Perpignan</option><option value="Metz">Metz</option><option value="Besançon">Besançon</option><option value="Orléans">Orléans</option><option value="Mulhouse">Mulhouse</option><option value="Rouen">Rouen</option><option value="Caen">Caen</option><option value="Nancy">Nancy</option><option value="Argenteuil">Argenteuil</option><option value="Montreuil">Montreuil</option><option value="Saint-Denis">Saint-Denis</option><option value="Roubaix">Roubaix</option><option value="Tourcoing">Tourcoing</option><option value="Nanterre">Nanterre</option><option value="Vitry-sur-Seine">Vitry-sur-Seine</option><option value="Créteil">Créteil</option><option value="Avignon">Avignon</option><option value="Poitiers">Poitiers</option><option value="Courbevoie">Courbevoie</option><option value="Versailles">Versailles</option><option value="Pau">Pau</option><option value="Colombes">Colombes</option><option value="Asnières-sur-Seine">Asnières-sur-Seine</option><option value="Aulnay-sous-Bois">Aulnay-sous-Bois</option><option value="Rueil-Malmaison">Rueil-Malmaison</option><option value="Aubervilliers">Aubervilliers</option><option value="Champigny-sur-Marne">Champigny-sur-Marne</option><option value="Antibes">Antibes</option><option value="Saint-Maur-des-Fossés">Saint-Maur-des-Fossés</option><option value="La Rochelle">La Rochelle</option><option value="Cannes">Cannes</option><option value="Calais">Calais</option><option value="Béziers">Béziers</option><option value="Dunkerque">Dunkerque</option><option value="Bourges">Bourges</option><option value="Mérignac">Mérignac</option><option value="Niort">Niort</option><option value="Villejuif">Villejuif</option><option value="Clichy">Clichy</option><option value="Ivry-sur-Seine">Ivry-sur-Seine</option><option value="Levallois-Perret">Levallois-Perret</option><option value="Issy-les-Moulineaux">Issy-les-Moulineaux</option><option value="Noisy-le-Grand">Noisy-le-Grand</option><option value="Évry">Évry</option><option value="Vénissieux">Vénissieux</option><option value="Cergy">Cergy</option><option value="Pessac">Pessac</option><option value="Valence">Valence</option><option value="Quimper">Quimper</option><option value="Antony">Antony</option><option value="Villeneuve-d\'Ascq">Villeneuve-d\'Ascq</option><option value="Troyes">Troyes</option><option value="Neuilly-sur-Seine">Neuilly-sur-Seine</option><option value="Chambéry">Chambéry</option><option value="Lorient">Lorient</option><option value="Montauban">Montauban</option><option value="Sarcelles">Sarcelles</option><option value="Les Abymes">Les Abymes</option><option value="Ajaccio">Ajaccio</option><option value="Saint-Pierre">Saint-Pierre</option><option value="Fort-de-France">Fort-de-France</option><option value="Saint-Paul">Saint-Paul</option><option value="Saint-Louis">Saint-Louis</option><option value="Le Tampon">Le Tampon</option><option value="Saint-André">Saint-André</option><option value="Saint-Joseph">Saint-Joseph</option><option value="Saint-Benoît">Saint-Benoît</option><option value="Sainte-Marie">Sainte-Marie</option><option value="Sainte-Suzanne">Sainte-Suzanne</option><option value="Le Port">Le Port</option><option value="Saint-Leu">Saint-Leu</option><option value="Les Avirons">Les Avirons</option><option value="L\'Étang-Salé">L\'Étang-Salé</option><option value="Petite-Île">Petite-Île</option><option value="Cilaos">Cilaos</option><option value="Salazie">Salazie</option><option value="La Plaine-des-Palmistes">La Plaine-des-Palmistes</option><option value="Bras-Panon">Bras-Panon</option><option value="La Possession">La Possession</option><option value="Saint-Philippe">Saint-Philippe</option><option value="Saint-Rose">Saint-Rose</option><option value="Sainte-Rose">Sainte-Rose</option>';
    }
    if (country == 'GAB') {
        document.getElementById('city').innerHTML = '<option value="Libreville">Libreville</option><option value="Port-Gentil">Port-Gentil</option><option value="Franceville">Franceville</option><option value="Oyem">Oyem</option><option value="Moanda">Moanda</option><option value="Mouila">Mouila</option><option value="Lambaréné">Lambaréné</option><option value="Tchibanga">Tchibanga</option><option value="Koulamoutou">Koulamoutou</option><option value="Makokou">Makokou</option><option value="Bitam">Bitam</option><option value="Gamba">Gamba</option><option value="Mitzic">Mitzic</option><option value="Ntoum">Ntoum</option><option value="Lastoursville">Lastoursville</option>';
    }
    if (country == 'GMB') {
        document.getElementById('city').innerHTML = '<option value="Banjul">Banjul</option><option value="Serekunda">Serekunda</option><option value="Brikama">Brikama</option><option value="Bakau">Bakau</option><option value="Banjulinding">Banjulinding</option><option value="Farafenni">Farafenni</option><option value="Lamin">Lamin</option><option value="Sukuta">Sukuta</option><option value="Gunjur">Gunjur</option><option value="Soma">Soma</option><option value="Basse Santa Su">Basse Santa Su</option><option value="Barra">Barra</option><option value="Essau">Essau</option><option value="Kerewan">Kerewan</option><option value="Kuntaur">Kuntaur</option>';
    }
    if (country == 'GEO') {
        document.getElementById('city').innerHTML = '<option value="Tbilisi">Tbilisi</option><option value="Kutaisi">Kutaisi</option><option value="Batumi">Batumi</option><option value="Rustavi">Rustavi</option><option value="Zugdidi">Zugdidi</option><option value="Gori">Gori</option><option value="Poti">Poti</option><option value="Samtredia">Samtredia</option><option value="Khashuri">Khashuri</option><option value="Senaki">Senaki</option><option value="Telavi">Telavi</option><option value="Ozurgeti">Ozurgeti</option><option value="Marneuli">Marneuli</option><option value="Kobuleti">Kobuleti</option><option value="Akhaltsikhe">Akhaltsikhe</option>';
    }
    if (country == 'DEU') {
        document.getElementById('city').innerHTML = '<option value="Berlin">Berlin</option><option value="Hamburg">Hamburg</option><option value="Munich">Munich</option><option value="Cologne">Cologne</option><option value="Frankfurt">Frankfurt</option><option value="Stuttgart">Stuttgart</option><option value="Düsseldorf">Düsseldorf</option><option value="Dortmund">Dortmund</option><option value="Essen">Essen</option><option value="Leipzig">Leipzig</option><option value="Bremen">Bremen</option><option value="Dresden">Dresden</option><option value="Hanover">Hanover</option><option value="Nuremberg">Nuremberg</option><option value="Duisburg">Duisburg</option><option value="Bochum">Bochum</option><option value="Wuppertal">Wuppertal</option><option value="Bielefeld">Bielefeld</option><option value="Bonn">Bonn</option><option value="Münster">Münster</option>';
    }
    if (country == 'GHA') {
        document.getElementById('city').innerHTML = '<option value="Accra">Accra</option><option value="Kumasi">Kumasi</option><option value="Tamale">Tamale</option><option value="Takoradi">Takoradi</option><option value="Atsiaman">Atsiaman</option><option value="Tema">Tema</option><option value="Teshie">Teshie</option><option value="Cape Coast">Cape Coast</option><option value="Sekondi-Takoradi">Sekondi-Takoradi</option><option value="Obuasi">Obuasi</option><option value="Sunyani">Sunyani</option><option value="Ho">Ho</option><option value="Techiman">Techiman</option><option value="Wa">Wa</option><option value="Bolgatanga">Bolgatanga</option>';
    }
    if (country == 'GRC') {
        document.getElementById('city').innerHTML = '<option value="Athens">Athens</option><option value="Thessaloniki">Thessaloniki</option><option value="Patras">Patras</option><option value="Heraklion">Heraklion</option><option value="Larissa">Larissa</option><option value="Volos">Volos</option><option value="Rhodes">Rhodes</option><option value="Ioannina">Ioannina</option><option value="Chania">Chania</option><option value="Chalcis">Chalcis</option><option value="Kalamata">Kalamata</option><option value="Serres">Serres</option><option value="Alexandroupoli">Alexandroupoli</option><option value="Xanthi">Xanthi</option><option value="Katerini">Katerini</option>';
    }
    if (country == 'GRD') {
        document.getElementById('city').innerHTML = '<option value="St. George\'s">St. George\'s</option><option value="Gouyave">Gouyave</option><option value="Grenville">Grenville</option><option value="Victoria">Victoria</option><option value="Sauteurs">Sauteurs</option><option value="Hillsborough">Hillsborough</option><option value="Birch Grove">Birch Grove</option><option value="Morne Jaloux Ridge">Morne Jaloux Ridge</option><option value="Grand Roy">Grand Roy</option><option value="Saint David’s">Saint David’s</option><option value="Lance aux Epines">Lance aux Epines</option><option value="Woburn">Woburn</option><option value="Calivigny">Calivigny</option><option value="Beaulieu">Beaulieu</option>';
    }
    if (country == 'GTM') {
        document.getElementById('city').innerHTML = '<option value="Guatemala City">Guatemala City</option><option value="Mixco">Mixco</option><option value="Villa Nueva">Villa Nueva</option><option value="Petapa">Petapa</option><option value="San Juan Sacatepéquez">San Juan Sacatepéquez</option><option value="Quetzaltenango">Quetzaltenango</option><option value="Villa Canales">Villa Canales</option><option value="Escuintla">Escuintla</option><option value="Chinautla">Chinautla</option><option value="Chimaltenango">Chimaltenango</option><option value="Amatitlán">Amatitlán</option><option value="Santa Catarina Pinula">Santa Catarina Pinula</option><option value="San Miguel Petapa">San Miguel Petapa</option><option value="Huehuetenango">Huehuetenango</option><option value="Coatepeque">Coatepeque</option><option value="Chichicastenango">Chichicastenango</option><option value="Jalapa">Jalapa</option><option value="Mazatenango">Mazatenango</option><option value="Puerto Barrios">Puerto Barrios</option><option value="San Pedro Carchá">San Pedro Carchá</option>';
    }
    if (country == 'GIN') {
        document.getElementById('city').innerHTML = '<option value="Conakry">Conakry</option><option value="Nzérékoré">Nzérékoré</option><option value="Kindia">Kindia</option><option value="Kankan">Kankan</option><option value="Kissidougou">Kissidougou</option><option value="Gueckedou">Gueckedou</option><option value="Macenta">Macenta</option><option value="Labé">Labé</option><option value="Fria">Fria</option><option value="Siguiri">Siguiri</option><option value="Mamou">Mamou</option><option value="Boké">Boké</option><option value="Dabola">Dabola</option><option value="Faranah">Faranah</option><option value="Kouroussa">Kouroussa</option>';
    }
    if (country == 'GNB') {
        document.getElementById('city').innerHTML = '<option value="Bissau">Bissau</option><option value="Bafatá">Bafatá</option><option value="Gabú">Gabú</option><option value="Bissorã">Bissorã</option><option value="Bolama">Bolama</option><option value="Cacheu">Cacheu</option><option value="Catió">Catió</option><option value="Farim">Farim</option><option value="Fulacunda">Fulacunda</option><option value="Mansôa">Mansôa</option><option value="Buba">Buba</option><option value="Bubaque">Bubaque</option><option value="Canchungo">Canchungo</option><option value="Quinhamel">Quinhamel</option><option value="Nhacra">Nhacra</option>';
    }
    if (country == 'GUY') {
        document.getElementById('city').innerHTML = '<option value="Georgetown">Georgetown</option><option value="Linden">Linden</option><option value="New Amsterdam">New Amsterdam</option><option value="Bartica">Bartica</option><option value="Skeldon">Skeldon</option><option value="Rosignol">Rosignol</option><option value="Mahaica Village">Mahaica Village</option><option value="Vreed en Hoop">Vreed en Hoop</option><option value="Fort Wellington">Fort Wellington</option><option value="Mahaicony Village">Mahaicony Village</option><option value="Anna Regina">Anna Regina</option><option value="Parika">Parika</option><option value="Lethem">Lethem</option><option value="Corriverton">Corriverton</option><option value="Ituni">Ituni</option>';
    }
    if (country == 'HTI') {
        document.getElementById('city').innerHTML = '<option value="Port-au-Prince">Port-au-Prince</option><option value="Carrefour">Carrefour</option><option value="Delmas">Delmas</option><option value="Pétionville">Pétionville</option><option value="Port-de-Paix">Port-de-Paix</option><option value="Jacmel">Jacmel</option><option value="Cap-Haïtien">Cap-Haïtien</option><option value="Léogâne">Léogâne</option><option value="Les Cayes">Les Cayes</option><option value="Saint-Marc">Saint-Marc</option><option value="Gonaïves">Gonaïves</option><option value="Hinche">Hinche</option><option value="Miragoâne">Miragoâne</option><option value="Jérémie">Jérémie</option><option value="Ouanaminthe">Ouanaminthe</option>';
    }
    if (country == 'HND') {
        document.getElementById('city').innerHTML = '<option value="Tegucigalpa">Tegucigalpa</option><option value="San Pedro Sula">San Pedro Sula</option><option value="Choloma">Choloma</option><option value="La Ceiba">La Ceiba</option><option value="El Progreso">El Progreso</option><option value="Choluteca">Choluteca</option><option value="Comayagua">Comayagua</option><option value="Puerto Cortés">Puerto Cortés</option><option value="La Lima">La Lima</option><option value="Danlí">Danlí</option><option value="Juticalpa">Juticalpa</option><option value="Villanueva">Villanueva</option><option value="Tocoa">Tocoa</option><option value="Olanchito">Olanchito</option><option value="Santa Rosa de Copán">Santa Rosa de Copán</option>';
    }
    if (country == 'HUN') {
        document.getElementById('city').innerHTML = '<option value="Budapest">Budapest</option><option value="Debrecen">Debrecen</option><option value="Szeged">Szeged</option><option value="Miskolc">Miskolc</option><option value="Pécs">Pécs</option><option value="Győr">Győr</option><option value="Nyíregyháza">Nyíregyháza</option><option value="Kecskemét">Kecskemét</option><option value="Székesfehérvár">Székesfehérvár</option><option value="Szombathely">Szombathely</option><option value="Szolnok">Szolnok</option><option value="Tatabánya">Tatabánya</option><option value="Kaposvár">Kaposvár</option><option value="Érd">Érd</option><option value="Veszprém">Veszprém</option>';
    }
    if (country == 'ISL') {
        document.getElementById('city').innerHTML = '<option value="Reykjavik">Reykjavik</option><option value="Kopavogur">Kopavogur</option><option value="Hafnarfjordur">Hafnarfjordur</option><option value="Akureyri">Akureyri</option><option value="Garðabær">Garðabær</option><option value="Mosfellsbær">Mosfellsbær</option><option value="Akranes">Akranes</option><option value="Selfoss">Selfoss</option><option value="Seltjarnarnes">Seltjarnarnes</option><option value="Vestmannaeyjar">Vestmannaeyjar</option>';
    }
    if (country == 'IND') {
        document.getElementById('city').innerHTML = '<option value="Mumbai">Mumbai</option><option value="Delhi">Delhi</option><option value="Bangalore">Bangalore</option><option value="Hyderabad">Hyderabad</option><option value="Ahmedabad">Ahmedabad</option><option value="Chennai">Chennai</option><option value="Kolkata">Kolkata</option><option value="Surat">Surat</option><option value="Pune">Pune</option><option value="Jaipur">Jaipur</option>';
    }
    if (country == 'IDN') {
        document.getElementById('city').innerHTML = '<option value="Jakarta">Jakarta</option><option value="Surabaya">Surabaya</option><option value="Bandung">Bandung</option><option value="Medan">Medan</option><option value="Semarang">Semarang</option><option value="Palembang">Palembang</option><option value="Makassar">Makassar</option><option value="Tangerang">Tangerang</option><option value="South Tangerang">South Tangerang</option><option value="Depok">Depok</option>';
    }
    if (country == 'IRN') {
        document.getElementById('city').innerHTML = '<option value="Tehran">Tehran</option><option value="Mashhad">Mashhad</option><option value="Isfahan">Isfahan</option><option value="Karaj">Karaj</option><option value="Tabriz">Tabriz</option><option value="Shiraz">Shiraz</option><option value="Qom">Qom</option><option value="Ahvaz">Ahvaz</option><option value="Kermanshah">Kermanshah</option><option value="Urmia">Urmia</option>';
    }
    if (country == 'IRQ') {
        document.getElementById('city').innerHTML = '<option value="Baghdad">Baghdad</option><option value="Basra">Basra</option><option value="Sulaymaniyah">Sulaymaniyah</option><option value="Erbil">Erbil</option><option value="Najaf">Najaf</option><option value="Kirkuk">Kirkuk</option><option value="Karbala">Karbala</option><option value="Nasiriyah">Nasiriyah</option><option value="Hilla">Hilla</option><option value="Amara">Amara</option>';
    }
    if (country == 'IRL') {
        document.getElementById('city').innerHTML = '<option value="Dublin">Dublin</option><option value="Cork">Cork</option><option value="Limerick">Limerick</option><option value="Galway">Galway</option><option value="Waterford">Waterford</option><option value="Drogheda">Drogheda</option><option value="Dundalk">Dundalk</option><option value="Bray">Bray</option><option value="Swords">Swords</option><option value="Navan">Navan</option>';
    }
    if (country == 'ITA'){
        document.getElementById('city').innerHTML = '<option value="Rome">Rome</option><option value="Milan">Milan</option><option value="Naples">Naples</option><option value="Turin">Turin</option><option value="Palermo">Palermo</option><option value="Genoa">Genoa</option><option value="Bologna">Bologna</option><option value="Florence">Florence</option><option value="Bari">Bari</option><option value="Catania">Catania</option>';
    }
    if (country == 'JAM'){
        document.getElementById('city').innerHTML = '<option value="Kingston">Kingston</option><option value="New Kingston">New Kingston</option><option value="Spanish Town">Spanish Town</option><option value="Portmore">Portmore</option><option value="Montego Bay">Montego Bay</option><option value="Mandeville">Mandeville</option><option value="May Pen">May Pen</option><option value="Old Harbour">Old Harbour</option><option value="Linstead">Linstead</option><option value="Half Way Tree">Half Way Tree</option>';
    }
    if (country == 'JPN'){
        document.getElementById('city').innerHTML = '<option value="Tokyo">Tokyo</option><option value="Yokohama">Yokohama</option><option value="Osaka">Osaka</option><option value="Nagoya">Nagoya</option><option value="Sapporo">Sapporo</option><option value="Fukuoka">Fukuoka</option><option value="Kobe">Kobe</option><option value="Kyoto">Kyoto</option><option value="Kawasaki">Kawasaki</option><option value="Saitama">Saitama</option>';
    }
    if (country == 'JOR'){
        document.getElementById('city').innerHTML = '<option value="Amman">Amman</option><option value="Zarqa">Zarqa</option><option value="Irbid">Irbid</option><option value="Russeifa">Russeifa</option><option value="Al-Quwaysimah">Al-Quwaysimah</option><option value="Wadi as-Ser">Wadi as-Ser</option><option value="Tila al-Ali">Tila al-Ali</option><option value="Aqaba">Aqaba</option><option value="Salt">Salt</option><option value="Ar Ramtha">Ar Ramtha</option>';
    }
    if (country == 'KAZ'){
        document.getElementById('city').innerHTML = '<option value="Almaty">Almaty</option><option value="Karaganda">Karaganda</option><option value="Shymkent">Shymkent</option><option value="Nur-Sultan">Nur-Sultan</option><option value="Taraz">Taraz</option><option value="Aktobe">Aktobe</option><option value="Pavlodar">Pavlodar</option><option value="Ust-Kamenogorsk">Ust-Kamenogorsk</option><option value="Semey">Semey</option><option value="Kostanay">Kostanay</option>';
    }
    if (country == 'KEN'){
        document.getElementById('city').innerHTML = '<option value="Nairobi">Nairobi</option><option value="Mombasa">Mombasa</option><option value="Kisumu">Kisumu</option><option value="Nakuru">Nakuru</option><option value="Eldoret">Eldoret</option><option value="Thika">Thika</option><option value="Malindi">Malindi</option><option value="Kitale">Kitale</option><option value="Garissa">Garissa</option><option value="Kakamega">Kakamega</option>';
    }
    if (country == 'KIR'){
        document.getElementById('city').innerHTML = '<option value="South Tarawa">South Tarawa</option><option value="Betio Village">Betio Village</option><option value="Bikenibeu Village">Bikenibeu Village</option><option value="Teaoraereke Village">Teaoraereke Village</option><option value="Bonriki Village">Bonriki Village</option><option value="Temwaiku Village">Temwaiku Village</option><option value="Tabwakea Village">Tabwakea Village</option><option value="Rungata Village">Rungata Village</option><option value="Utiroa Village">Utiroa Village</option><option value="Rawannawi Village">Rawannawi Village</option>';
    }
    if (country == 'PRK'){
        document.getElementById('city').innerHTML = '<option value="Pyongyang">Pyongyang</option><option value="Hamhung">Hamhung</option><option value="Nampo">Nampo</option><option value="Sariwon">Sariwon</option><option value="Wonsan">Wonsan</option><option value="Chongjin">Chongjin</option><option value="Sinuiju">Sinuiju</option><option value="Haeju">Haeju</option><option value="Kaesong">Kaesong</option><option value="Kanggye">Kanggye</option>';
    }
    if (country == 'KOR'){
        document.getElementById('city').innerHTML = '<option value="Seoul">Seoul</option><option value="Busan">Busan</option><option value="Incheon">Incheon</option><option value="Daegu">Daegu</option><option value="Daejeon">Daejeon</option><option value="Gwangju">Gwangju</option><option value="Suwon">Suwon</option><option value="Ulsan">Ulsan</option><option value="Changwon">Changwon</option><option value="Seongnam">Seongnam</option>';
    }
    if (country == 'KWT'){
        document.getElementById('city').innerHTML = '<option value="Kuwait City">Kuwait City</option><option value="Al Ahmadi">Al Ahmadi</option><option value="Hawalli">Hawalli</option><option value="As Salimiyah">As Salimiyah</option><option value="Sabah as Salim">Sabah as Salim</option><option value="Al Farwaniyah">Al Farwaniyah</option><option value="Al Fahahil">Al Fahahil</option><option value="Ar Riqqah">Ar Riqqah</option><option value="Salwa">Salwa</option><option value="Al Manqaf">Al Manqaf</option>';
    }
    if (country == 'KGZ'){
        document.getElementById('city').innerHTML = '<option value="Bishkek">Bishkek</option><option value="Osh">Osh</option><option value="Jalal-Abad">Jalal-Abad</option><option value="Karakol">Karakol</option><option value="Tokmok">Tokmok</option><option value="Uzgen">Uzgen</option><option value="Balykchy">Balykchy</option><option value="Kara-Balta">Kara-Balta</option><option value="Naryn">Naryn</option><option value="Talas">Talas</option>';
    }
    if (country == 'LAO'){
        document.getElementById('city').innerHTML = '<option value="Vientiane">Vientiane</option><option value="Pakse">Pakse</option><option value="Savannakhet">Savannakhet</option><option value="Luang Prabang">Luang Prabang</option><option value="Xam Nua">Xam Nua</option><option value="Thakhek">Thakhek</option><option value="Muang Xay">Muang Xay</option><option value="Vang Vieng">Vang Vieng</option><option value="Phonsavan">Phonsavan</option><option value="Paksan">Paksan</option>';
    }
    if (country == 'LVA'){
        document.getElementById('city').innerHTML = '<option value="Riga">Riga</option><option value="Daugavpils">Daugavpils</option><option value="Liepāja">Liepāja</option><option value="Jelgava">Jelgava</option><option value="Jūrmala">Jūrmala</option><option value="Ventspils">Ventspils</option><option value="Rēzekne">Rēzekne</option><option value="Valmiera">Valmiera</option><option value="Ogre">Ogre</option><option value="Tukums">Tukums</option>';
    }
    if (country == 'LBN'){
        document.getElementById('city').innerHTML = '<option value="Beirut">Beirut</option><option value="Tripoli">Tripoli</option><option value="Sidon">Sidon</option><option value="Zahle">Zahle</option><option value="Tyre">Tyre</option><option value="Jounieh">Jounieh</option><option value="Baalbek">Baalbek</option><option value="Byblos">Byblos</option><option value="Aley">Aley</option><option value="Nabatieh">Nabatieh</option>';
    }
    if (country == 'LSO'){
        document.getElementById('city').innerHTML = '<option value="Maseru">Maseru</option><option value="Teyateyaneng">Teyateyaneng</option><option value="Mafeteng">Mafeteng</option><option value="Hlotse">Hlotse</option><option value="Mohale’s Hoek">Mohale’s Hoek</option><option value="Maputsoe">Maputsoe</option><option value="Qacha’s Nek">Qacha’s Nek</option><option value="Quthing">Quthing</option><option value="Butha-Buthe">Butha-Buthe</option><option value="Mokhotlong">Mokhotlong</option>';
    }
    if (country == 'LBR'){
        document.getElementById('city').innerHTML = '<option value="Monrovia">Monrovia</option><option value="Gbarnga">Gbarnga</option><option value="Kakata">Kakata</option><option value="Bensonville">Bensonville</option><option value="Harper">Harper</option><option value="Voinjama">Voinjama</option><option value="Buchanan">Buchanan</option><option value="Zwedru">Zwedru</option><option value="New Yekepa">New Yekepa</option><option value="Greenville">Greenville</option>';
    }
    if (country == 'LBY'){
        document.getElementById('city').innerHTML = '<option value="Tripoli">Tripoli</option><option value="Benghazi">Benghazi</option><option value="Misrata">Misrata</option><option value="Tarhuna">Tarhuna</option><option value="Al Khums">Al Khums</option><option value="Zawiya">Zawiya</option><option value="Zliten">Zliten</option><option value="Sabha">Sabha</option><option value="Sirte">Sirte</option><option value="Al Ajaylat">Al Ajaylat</option>';
    }
    if (country == 'LIE'){
        document.getElementById('city').innerHTML = '<option value="Vaduz">Vaduz</option><option value="Schaan">Schaan</option><option value="Triesen">Triesen</option><option value="Balzers">Balzers</option><option value="Eschen">Eschen</option><option value="Mauren">Mauren</option><option value="Triesenberg">Triesenberg</option><option value="Ruggell">Ruggell</option><option value="Gamprin">Gamprin</option><option value="Schellenberg">Schellenberg</option>';
    }
    if (country == 'LTU'){
        document.getElementById('city').innerHTML = '<option value="Vilnius">Vilnius</option><option value="Kaunas">Kaunas</option><option value="Klaipėda">Klaipėda</option><option value="Šiauliai">Šiauliai</option><option value="Panevėžys">Panevėžys</option><option value="Alytus">Alytus</option><option value="Marijampolė">Marijampolė</option><option value="Mažeikiai">Mažeikiai</option><option value="Jonava">Jonava</option><option value="Utena">Utena</option>';
    }
    if (country == 'LUX'){
        document.getElementById('city').innerHTML = '<option value="Luxembourg">Luxembourg</option><option value="Esch-sur-Alzette">Esch-sur-Alzette</option><option value="Differdange">Differdange</option><option value="Dudelange">Dudelange</option><option value="Ettelbruck">Ettelbruck</option><option value="Diekirch">Diekirch</option><option value="Wiltz">Wiltz</option><option value="Echternach">Echternach</option><option value="Rumelange">Rumelange</option><option value="Grevenmacher">Grevenmacher</option>';
    }
    if (country == 'MDG'){
        document.getElementById('city').innerHTML = '<option value="Antananarivo">Antananarivo</option><option value="Toamasina">Toamasina</option><option value="Antsirabe">Antsirabe</option><option value="Fianarantsoa">Fianarantsoa</option><option value="Mahajanga">Mahajanga</option><option value="Toliara">Toliara</option><option value="Antsiranana">Antsiranana</option><option value="Antanifotsy">Antanifotsy</option><option value="Ambovombe">Ambovombe</option><option value="Ambilobe">Ambilobe</option>';
    }
    if (country == 'MWI'){
        document.getElementById('city').innerHTML = '<option value="Lilongwe">Lilongwe</option><option value="Blantyre">Blantyre</option><option value="Mzuzu">Mzuzu</option><option value="Zomba">Zomba</option><option value="Kasungu">Kasungu</option><option value="Mangochi">Mangochi</option><option value="Karonga">Karonga</option><option value="Salima">Salima</option><option value="Nkhotakota">Nkhotakota</option><option value="Liwaladzi">Liwaladzi</option>';
    }
    if (country == 'MYS'){
        document.getElementById('city').innerHTML = '<option value="Kuala Lumpur">Kuala Lumpur</option><option value="George Town">George Town</option><option value="Ipoh">Ipoh</option><option value="Shah Alam">Shah Alam</option><option value="Petaling Jaya">Petaling Jaya</option><option value="Kuching">Kuching</option><option value="Kota Kinabalu">Kota Kinabalu</option><option value="Seremban">Seremban</option><option value="Sandakan">Sandakan</option><option value="Kuantan">Kuantan</option>';
    }
    if (country == 'MDV') {
        document.getElementById('city').innerHTML = '<option value="Malé">Malé</option><option value="Addu City">Addu City</option><option value="Fuvahmulah">Fuvahmulah</option><option value="Hithadhoo">Hithadhoo</option><option value="Kulhudhuffushi">Kulhudhuffushi</option><option value="Thinadhoo">Thinadhoo</option><option value="Naifaru">Naifaru</option><option value="Dhidhdhoo">Dhidhdhoo</option><option value="Eydhafushi">Eydhafushi</option><option value="Mahibadhoo">Mahibadhoo</option>';
    }
    if (country == 'MLI'){
        document.getElementById('city').innerHTML = '<option value="Bamako">Bamako</option><option value="Sikasso">Sikasso</option><option value="Mopti">Mopti</option><option value="Koutiala">Koutiala</option><option value="Kayes">Kayes</option><option value="Ségou">Ségou</option><option value="Gao">Gao</option><option value="Markala">Markala</option><option value="Kati">Kati</option><option value="Djenné">Djenné</option>';
    }
    if (country == 'MLT'){
        document.getElementById('city').innerHTML = '<option value="Valletta">Valletta</option><option value="Birkirkara">Birkirkara</option><option value="Qormi">Qormi</option><option value="Mosta">Mosta</option><option value="Żabbar">Żabbar</option><option value="San Pawl il-Baħar">San Pawl il-Baħar</option><option value="Saint John">Saint John</option><option value="Fgura">Fgura</option><option value="Żejtun">Żejtun</option><option value="Sliema">Sliema</option>';
    }
    if (country == 'MHL'){
        document.getElementById('city').innerHTML = '<option value="Majuro">Majuro</option><option value="Arno">Arno</option><option value="Jaluit">Jaluit</option><option value="Wotje">Wotje</option><option value="Mili">Mili</option><option value="Ebon">Ebon</option><option value="Ailinglaplap">Ailinglaplap</option><option value="Ujae">Ujae</option><option value="Lae">Lae</option><option value="Namu">Namu</option>';
    }
    if (country == 'MRT'){
        document.getElementById('city').innerHTML = '<option value="Nouakchott">Nouakchott</option><option value="Nouadhibou">Nouadhibou</option><option value="Néma">Néma</option><option value="Kaédi">Kaédi</option><option value="Rosso">Rosso</option><option value="Zouérat">Zouérat</option><option value="Atar">Atar</option><option value="Tidjikja">Tidjikja</option><option value="Kiffa">Kiffa</option><option value="Aleg">Aleg</option>';
    }
    if (country == 'MUS'){
        document.getElementById('city').innerHTML = '<option value="Port Louis">Port Louis</option><option value="Beau Bassin-Rose Hill">Beau Bassin-Rose Hill</option><option value="Vacoas-Phoenix">Vacoas-Phoenix</option><option value="Curepipe">Curepipe</option><option value="Quatre Bornes">Quatre Bornes</option><option value="Triolet">Triolet</option><option value="Goodlands">Goodlands</option><option value="Centre de Flacq">Centre de Flacq</option><option value="Bel Air Rivière Sèche">Bel Air Rivière Sèche</option><option value="Mahebourg">Mahebourg</option>';
    }
    if (country == 'MEX'){
        document.getElementById('city').innerHTML = '<option value="Mexico City">Mexico City</option><option value="Iztapalapa">Iztapalapa</option><option value="Ecatepec de Morelos">Ecatepec de Morelos</option><option value="Guadalajara">Guadalajara</option><option value="Puebla">Puebla</option><option value="Ciudad Juárez">Ciudad Juárez</option><option value="Tijuana">Tijuana</option><option value="León">León</option><option value="Gustavo A. Madero">Gustavo A. Madero</option><option value="Zapopan">Zapopan</option>';
    }
    if (country == 'FSM'){
        document.getElementById('city').innerHTML = '<option value="Palikir">Palikir</option><option value="Weno">Weno</option><option value="Colonia">Colonia</option><option value="Tofol">Tofol</option><option value="Kolonia">Kolonia</option><option value="Kitti">Kitti</option><option value="Nanpil">Nanpil</option><option value="Uman">Uman</option><option value="Paata">Paata</option><option value="Malem">Malem</option>';
    }
    if (country == 'MDA'){
        document.getElementById('city').innerHTML = '<option value="Chișinău">Chișinău</option><option value="Tiraspol">Tiraspol</option><option value="Bălți">Bălți</option><option value="Bender">Bender</option><option value="Rîbnița">Rîbnița</option><option value="Cahul">Cahul</option><option value="Ungheni">Ungheni</option><option value="Soroca">Soroca</option><option value="Orhei">Orhei</option><option value="Dubăsari">Dubăsari</option>';
    }
    if (country == 'MCO'){
        document.getElementById('city').innerHTML = '<option value="Monaco">Monaco</option><option value="Monte Carlo">Monte Carlo</option><option value="La Condamine">La Condamine</option><option value="Fontvieille">Fontvieille</option><option value="Moneghetti">Moneghetti</option><option value="Saint-Roman">Saint-Roman</option><option value="Les Moneghetti">Les Moneghetti</option><option value="Larvotto">Larvotto</option><option value="La Rousse">La Rousse</option><option value="Port Hercule">Port Hercule</option>';
    }
    if (country == 'MNG'){
        document.getElementById('city').innerHTML = '<option value="Ulaanbaatar">Ulaanbaatar</option><option value="Erdenet">Erdenet</option><option value="Darkhan">Darkhan</option><option value="Choibalsan">Choibalsan</option><option value="Ölgii">Ölgii</option><option value="Khovd">Khovd</option><option value="Mörön">Mörön</option><option value="Sühbaatar">Sühbaatar</option><option value="Bulgan">Bulgan</option><option value="Baruun-Urt">Baruun-Urt</option>';
    }
    if (country == 'MNE'){
        document.getElementById('city').innerHTML = '<option value="Podgorica">Podgorica</option><option value="Nikšić">Nikšić</option><option value="Herceg Novi">Herceg Novi</option><option value="Pljevlja">Pljevlja</option><option value="Budva">Budva</option><option value="Bar">Bar</option><option value="Berane">Berane</option><option value="Ulcinj">Ulcinj</option><option value="Tivat">Tivat</option><option value="Kotor">Kotor</option>';
    }
    if (country == 'MAR'){
        document.getElementById('city').innerHTML = '<option value="Casablanca">Casablanca</option><option value="Rabat">Rabat</option><option value="Fès">Fès</option><option value="Marrakesh">Marrakesh</option><option value="Agadir">Agadir</option><option value="Tangier">Tangier</option><option value="Meknes">Meknes</option><option value="Oujda">Oujda</option><option value="Kenitra">Kenitra</option><option value="Tétouan">Tétouan</option>';
    }
    if (country == 'MOZ'){
        document.getElementById('city').innerHTML = '<option value="Maputo">Maputo</option><option value="Matola">Matola</option><option value="Beira">Beira</option><option value="Nampula">Nampula</option><option value="Chimoio">Chimoio</option><option value="Quelimane">Quelimane</option><option value="Tete">Tete</option><option value="Xai-Xai">Xai-Xai</option><option value="Maxixe">Maxixe</option><option value="Lichinga">Lichinga</option>';
    }
    if (country == 'MMR'){
        document.getElementById('city').innerHTML = '<option value="Yangon">Yangon</option><option value="Mandalay">Mandalay</option><option value="Naypyidaw">Naypyidaw</option><option value="Mawlamyine">Mawlamyine</option><option value="Bago">Bago</option><option value="Pathein">Pathein</option><option value="Monywa">Monywa</option><option value="Sittwe">Sittwe</option><option value="Meiktila">Meiktila</option><option value="Myeik">Myeik</option>';
    }
    if (country == 'NAM'){
        document.getElementById('city').innerHTML = '<option value="Windhoek">Windhoek</option><option value="Rundu">Rundu</option><option value="Walvis Bay">Walvis Bay</option><option value="Oshakati">Oshakati</option><option value="Swakopmund">Swakopmund</option><option value="Katima Mulilo">Katima Mulilo</option><option value="Grootfontein">Grootfontein</option><option value="Rehoboth">Rehoboth</option><option value="Otjiwarongo">Otjiwarongo</option><option value="Okahandja">Okahandja</option>';
    }
    if (country == 'NRU'){
        document.getElementById('city').innerHTML = '<option value="Yaren">Yaren</option><option value="Denigomodu">Denigomodu</option><option value="Anabar">Anabar</option><option value="Anibare">Anibare</option><option value="Baiti">Baiti</option><option value="Boe">Boe</option><option value="Buada">Buada</option><option value="Meneng">Meneng</option><option value="Nibok">Nibok</option><option value="Uaboe">Uaboe</option>';
    }
    if (country == 'NPL'){
        document.getElementById('city').innerHTML = '<option value="Kathmandu">Kathmandu</option><option value="Pokhara">Pokhara</option><option value="Patan">Patan</option><option value="Biratnagar">Biratnagar</option><option value="Birganj">Birganj</option><option value="Dharan">Dharan</option><option value="Bharatpur">Bharatpur</option><option value="Janakpur">Janakpur</option><option value="Dhangadhi">Dhangadhi</option><option value="Butwal">Butwal</option>';
    }
    if (country == 'NLD'){
        document.getElementById('city').innerHTML = '<option value="Amsterdam">Amsterdam</option><option value="Rotterdam">Rotterdam</option><option value="The Hague">The Hague</option><option value="Utrecht">Utrecht</option><option value="Eindhoven">Eindhoven</option><option value="Tilburg">Tilburg</option><option value="Groningen">Groningen</option><option value="Almere Stad">Almere Stad</option><option value="Breda">Breda</option><option value="Nijmegen">Nijmegen</option>';
    }
    if (country == 'NZL'){
        document.getElementById('city').innerHTML = '<option value="Auckland">Auckland</option><option value="Wellington">Wellington</option><option value="Christchurch">Christchurch</option><option value="Manukau City">Manukau City</option><option value="Waitakere">Waitakere</option><option value="North Shore">North Shore</option><option value="Hamilton">Hamilton</option><option value="Dunedin">Dunedin</option><option value="Tauranga">Tauranga</option><option value="Lower Hutt">Lower Hutt</option>';
    }
    if (country == 'NIC'){
        document.getElementById('city').innerHTML = '<option value="Managua">Managua</option><option value="León">León</option><option value="Masaya">Masaya</option><option value="Chinandega">Chinandega</option><option value="Matagalpa">Matagalpa</option><option value="Estelí">Estelí</option><option value="Granada">Granada</option><option value="Ciudad Sandino">Ciudad Sandino</option><option value="Juigalpa">Juigalpa</option><option value="El Viejo">El Viejo</option>';
    }
    if (country == 'NER'){
        document.getElementById('city').innerHTML = '<option value="Niamey">Niamey</option><option value="Zinder">Zinder</option><option value="Maradi">Maradi</option><option value="Agadez">Agadez</option><option value="Alaghsas">Alaghsas</option><option value="Tahoua">Tahoua</option><option value="Dosso">Dosso</option><option value="Birni Nkonni">Birni Nkonni</option><option value="Tessaoua">Tessaoua</option><option value="Gaya">Gaya</option>';
    }
    if (country == 'NGA'){
        document.getElementById('city').innerHTML = '<option value="Lagos">Lagos</option><option value="Kano">Kano</option><option value="Ibadan">Ibadan</option><option value="Kaduna">Kaduna</option><option value="Port Harcourt">Port Harcourt</option><option value="Benin City">Benin City</option><option value="Maiduguri">Maiduguri</option><option value="Zaria">Zaria</option><option value="Aba">Aba</option><option value="Jos">Jos</option>';
    }
    if (country == 'MKD'){
        document.getElementById('city').innerHTML = '<option value="Skopje">Skopje</option><option value="Bitola">Bitola</option><option value="Kumanovo">Kumanovo</option><option value="Prilep">Prilep</option><option value="Tetovo">Tetovo</option><option value="Veles">Veles</option><option value="Ohrid">Ohrid</option><option value="Gostivar">Gostivar</option><option value="Štip">Štip</option><option value="Strumica">Strumica</option>';
    }
    if (country == 'NOR'){
        document.getElementById('city').innerHTML = '<option value="Oslo">Oslo</option><option value="Bergen">Bergen</option><option value="Stavanger">Stavanger</option><option value="Trondheim">Trondheim</option><option value="Drammen">Drammen</option><option value="Fredrikstad">Fredrikstad</option><option value="Kristiansand">Kristiansand</option><option value="Sandnes">Sandnes</option><option value="Ålesund">Ålesund</option><option value="Tønsberg">Tønsberg</option>';
    }
    if (country == 'OMN'){
        document.getElementById('city').innerHTML = '<option value="Muscat">Muscat</option><option value="Seeb">Seeb</option><option value="Salalah">Salalah</option><option value="Bawshar">Bawshar</option><option value="Sohar">Sohar</option><option value="As Suwayq">As Suwayq</option><option value="Ibri">Ibri</option><option value="Saham">Saham</option><option value="Barka">Barka</option><option value="Rustaq">Rustaq</option>';
    }
    if (country == 'PAK'){
        document.getElementById('city').innerHTML = '<option value="Karachi">Karachi</option><option value="Lahore">Lahore</option><option value="Faisalabad">Faisalabad</option><option value="Rawalpindi">Rawalpindi</option><option value="Gujranwala">Gujranwala</option><option value="Multan">Multan</option><option value="Hyderabad">Hyderabad</option><option value="Peshawar">Peshawar</option><option value="Quetta">Quetta</option><option value="Islamabad">Islamabad</option>';
    }
    if (country == 'PLW'){
        document.getElementById('city').innerHTML = '<option value="Melekeok">Melekeok</option><option value="Koror">Koror</option><option value="Ungilchekel">Ungilchekel</option><option value="Ngerulmud">Ngerulmud</option><option value="Nekken">Nekken</option><option value="Ngetkib">Ngetkib</option><option value="Ngermechau">Ngermechau</option><option value="Ngerkeai">Ngerkeai</option><option value="Ngerbeched">Ngerbeched</option><option value="Ngerbodel">Ngerbodel</option>';
    }
    if (country == 'PAN'){
        document.getElementById('city').innerHTML = '<option value="Panama City">Panama City</option><option value="San Miguelito">San Miguelito</option><option value="Tocumen">Tocumen</option><option value="David">David</option><option value="Arraiján">Arraiján</option><option value="Colón">Colón</option><option value="Las Cumbres">Las Cumbres</option><option value="La Chorrera">La Chorrera</option><option value="Pacora">Pacora</option><option value="Santiago de Veraguas">Santiago de Veraguas</option>';
    }
    if (country == 'PNG'){
        document.getElementById('city').innerHTML = '<option value="Port Moresby">Port Moresby</option><option value="Lae">Lae</option><option value="Arawa">Arawa</option><option value="Mount Hagen">Mount Hagen</option><option value="Popondetta">Popondetta</option><option value="Madang">Madang</option><option value="Kokopo">Kokopo</option><option value="Mendi">Mendi</option><option value="Kimbe">Kimbe</option><option value="Goroka">Goroka</option>';
    }
    if (country == 'PRY'){
        document.getElementById('city').innerHTML = '<option value="Asunción">Asunción</option><option value="Ciudad del Este">Ciudad del Este</option><option value="San Lorenzo">San Lorenzo</option><option value="Capiatá">Capiatá</option><option value="Lambaré">Lambaré</option><option value="Fernando de la Mora">Fernando de la Mora</option><option value="Limpio">Limpio</option><option value="Ñemby">Ñemby</option><option value="Encarnación">Encarnación</option><option value="Pedro Juan Caballero">Pedro Juan Caballero</option>';
    }
    if (country == 'PER'){
        document.getElementById('city').innerHTML = '<option value="Lima">Lima</option><option value="Arequipa">Arequipa</option><option value="Callao">Callao</option><option value="Trujillo">Trujillo</option><option value="Chiclayo">Chiclayo</option><option value="Iquitos">Iquitos</option><option value="Huancayo">Huancayo</option><option value="Piura">Piura</option><option value="Chimbote">Chimbote</option><option value="Cusco">Cusco</option>';
    }
    if (country == 'PHL'){
        document.getElementById('city').innerHTML = '<option value="Quezon City">Quezon City</option><option value="Manila">Manila</option><option value="Caloocan">Caloocan</option><option value="Budta">Budta</option><option value="Davao">Davao</option><option value="Malingao">Malingao</option><option value="Cebu City">Cebu City</option><option value="General Santos">General Santos</option><option value="Taguig">Taguig</option><option value="Pasig City">Pasig City</option>';
    }
    if (country == 'POL'){
        document.getElementById('city').innerHTML = '<option value="Warsaw">Warsaw</option><option value="Łódź">Łódź</option><option value="Kraków">Kraków</option><option value="Wrocław">Wrocław</option><option value="Poznań">Poznań</option><option value="Gdańsk">Gdańsk</option><option value="Szczecin">Szczecin</option><option value="Bydgoszcz">Bydgoszcz</option><option value="Lublin">Lublin</option><option value="Katowice">Katowice</option>';
    }
    if (country == 'PRT'){
        document.getElementById('city').innerHTML = '<option value="Lisbon">Lisbon</option><option value="Vila Nova de Gaia">Vila Nova de Gaia</option><option value="Porto">Porto</option><option value="Amadora">Amadora</option><option value="Braga">Braga</option><option value="Funchal">Funchal</option><option value="Coimbra">Coimbra</option><option value="Setúbal">Setúbal</option><option value="Queluz">Queluz</option><option value="Aveiro">Aveiro</option>';
    }
    if (country == 'QAT'){
        document.getElementById('city').innerHTML = '<option value="Doha">Doha</option><option value="Ar Rayyan">Ar Rayyan</option><option value="Umm Şalāl ‘Alī">Umm Şalāl ‘Alī</option><option value="Al Wakrah">Al Wakrah</option><option value="Al Khawr">Al Khawr</option><option value="Al Wukayr">Al Wukayr</option><option value="Umm Şalāl Muḩammad">Umm Şalāl Muḩammad</option><option value="Al Ghuwayrīyah">Al Ghuwayrīyah</option><option value="Mesaieed">Mesaieed</option><option value="Dukhān">Dukhān</option>';
    }
    if (country == 'ROU'){
        document.getElementById('city').innerHTML = '<option value="Bucharest">Bucharest</option><option value="Iași">Iași</option><option value="Cluj-Napoca">Cluj-Napoca</option><option value="Timișoara">Timișoara</option><option value="Craiova">Craiova</option><option value="Constanța">Constanța</option><option value="Galați">Galați</option><option value="Brașov">Brașov</option><option value="Ploiești">Ploiești</option><option value="Brăila">Brăila</option>';
    }
    if (country == 'RUS'){
        document.getElementById('city').innerHTML = '<option value="Moscow">Moscow</option><option value="Saint Petersburg">Saint Petersburg</option><option value="Novosibirsk">Novosibirsk</option><option value="Yekaterinburg">Yekaterinburg</option><option value="Nizhny Novgorod">Nizhny Novgorod</option><option value="Samara">Samara</option><option value="Omsk">Omsk</option><option value="Kazan">Kazan</option><option value="Chelyabinsk">Chelyabinsk</option><option value="Rostov-na-Donu">Rostov-na-Donu</option>';
    }
    if (country == 'RWA'){
        document.getElementById('city').innerHTML = '<option value="Kigali">Kigali</option><option value="Butare">Butare</option><option value="Gitarama">Gitarama</option><option value="Ruhengeri">Ruhengeri</option><option value="Gisenyi">Gisenyi</option><option value="Byumba">Byumba</option><option value="Cyangugu">Cyangugu</option><option value="Kibuye">Kibuye</option><option value="Kibungo">Kibungo</option><option value="Nzega">Nzega</option>';
    }
    if (country == 'KNA'){
        document.getElementById('city').innerHTML = '<option value="Basseterre">Basseterre</option><option value="Sandy Point Town">Sandy Point Town</option><option value="Monkey Hill">Monkey Hill</option><option value="Cayon">Cayon</option><option value="Charlestown">Charlestown</option><option value="Dieppe Bay Town">Dieppe Bay Town</option><option value="Gingerland">Gingerland</option><option value="Newcastle">Newcastle</option><option value="Old Road Town">Old Road Town</option><option value="Parson’s Ground">Parson’s Ground</option>';
    }
    if (country == 'LCA'){
        document.getElementById('city').innerHTML = '<option value="Castries">Castries</option><option value="Bisee">Bisee</option><option value="Vieux Fort">Vieux Fort</option><option value="Micoud">Micoud</option><option value="Soufrière">Soufrière</option><option value="Dennery">Dennery</option><option value="Gros Islet">Gros Islet</option><option value="Anse La Raye">Anse La Raye</option><option value="Laborie">Laborie</option><option value="Canaries">Canaries</option>';
    }
    if (country == 'VCT'){
        document.getElementById('city').innerHTML = '<option value="Kingstown">Kingstown</option><option value="Kingstown Park">Kingstown Park</option><option value="Georgetown">Georgetown</option><option value="Byera Village">Byera Village</option><option value="Biabou">Biabou</option><option value="Port Elizabeth">Port Elizabeth</option><option value="Chateaubelair">Chateaubelair</option><option value="Dovers">Dovers</option><option value="Barrouallie">Barrouallie</option><option value="Layou">Layou</option>';
    }
    if (country == 'WSM'){
        document.getElementById('city').innerHTML = '<option value="Apia">Apia</option><option value="Asau">Asau</option><option value="Mulifanua">Mulifanua</option><option value="Faleula">Faleula</option><option value="Siusega">Siusega</option><option value="Malie">Malie</option><option value="Fasito‘outa">Fasito‘outa</option><option value="Lufilufi">Lufilufi</option><option value="Leulumoega">Leulumoega</option><option value="Satapuala">Satapuala</option>';
    }
    if (country == 'SMR'){
        document.getElementById('city').innerHTML = '<option value="São Tomé">São Tomé</option><option value="Neves">Neves</option><option value="Guadalupe">Guadalupe</option><option value="Santana">Santana</option><option value="Trindade">Trindade</option><option value="Santo António">Santo António</option><option value="São João dos Angolares">São João dos Angolares</option><option value="São João das Angolares">São João das Angolares</option><option value="São Tomé">São Tomé</option><option value="Santa Catarina">Santa Catarina</option>';
    }
    if (country == 'SAU'){
        document.getElementById('city').innerHTML = '<option value="Riyadh">Riyadh</option><option value="Jeddah">Jeddah</option><option value="Mecca">Mecca</option><option value="Medina">Medina</option><option value="Sulţānah">Sulţānah</option><option value="Dammam">Dammam</option><option value="Ta’if">Ta’if</option><option value="Tabuk">Tabuk</option><option value="Al Kharj">Al Kharj</option><option value="Buraidah">Buraidah</option>';
    }
    if (country == 'SEN'){
        document.getElementById('city').innerHTML = '<option value="Dakar">Dakar</option><option value="Grand Dakar">Grand Dakar</option><option value="Thiès Nones">Thiès Nones</option><option value="Saint-Louis">Saint-Louis</option><option value="Ziguinchor">Ziguinchor</option><option value="Touba">Touba</option><option value="Kaolack">Kaolack</option><option value="Rufisque">Rufisque</option><option value="Mbour">Mbour</option><option value="Diourbel">Diourbel</option>';
    }
    if (country == 'SRB'){
        document.getElementById('city').innerHTML = '<option value="Belgrade">Belgrade</option><option value="Novi Sad">Novi Sad</option><option value="Niš">Niš</option><option value="Zemun">Zemun</option><option value="Kragujevac">Kragujevac</option><option value="Čačak">Čačak</option><option value="Subotica">Subotica</option><option value="Leskovac">Leskovac</option><option value="Novi Pazar">Novi Pazar</option><option value="Kraljevo">Kraljevo</option>';
    }
    if (country == 'SYC'){
        document.getElementById('city').innerHTML = '<option value="Victoria">Victoria</option><option value="Anse Boileau">Anse Boileau</option><option value="Bel Ombre">Bel Ombre</option><option value="Beau Vallon">Beau Vallon</option><option value="Cascade">Cascade</option><option value="Anse Royale">Anse Royale</option><option value="Takamaka">Takamaka</option><option value="Port Glaud">Port Glaud</option><option value="Grand Anse Mahé">Grand Anse Mahé</option><option value="Victoria">Victoria</option>';
    }
    if (country == 'SLE'){
        document.getElementById('city').innerHTML = '<option value="Freetown">Freetown</option><option value="Bo">Bo</option><option value="Kenema">Kenema</option><option value="Koidu">Koidu</option><option value="Makeni">Makeni</option><option value="Lunsar">Lunsar</option><option value="Port Loko">Port Loko</option><option value="Kabala">Kabala</option><option value="Kailahun">Kailahun</option><option value="Magburaka">Magburaka</option>';
    }
    if (country == 'SGP'){
        document.getElementById('city').innerHTML = '<option value="Singapore">Singapore</option><option value="Woodlands">Woodlands</option><option value="Jurong East">Jurong East</option><option value="Tampines">Tampines</option><option value="Choa Chu Kang">Choa Chu Kang</option><option value="Hougang">Hougang</option><option value="Sengkang">Sengkang</option><option value="Yishun">Yishun</option><option value="Pasir Ris">Pasir Ris</option><option value="Bukit Batok">Bukit Batok</option>';
    }
    if (country == 'SVK'){
        document.getElementById('city').innerHTML = '<option value="Bratislava">Bratislava</option><option value="Košice">Košice</option><option value="Prešov">Prešov</option><option value="Žilina">Žilina</option><option value="Banská Bystrica">Banská Bystrica</option><option value="Nitra">Nitra</option><option value="Trnava">Trnava</option><option value="Martin">Martin</option><option value="Trenčín">Trenčín</option><option value="Poprad">Poprad</option>';
    }
    if (country == 'SVN'){
        document.getElementById('city').innerHTML = '<option value="Ljubljana">Ljubljana</option><option value="Maribor">Maribor</option><option value="Celje">Celje</option><option value="Kranj">Kranj</option><option value="Velenje">Velenje</option><option value="Koper">Koper</option><option value="Novo Mesto">Novo Mesto</option><option value="Ptuj">Ptuj</option><option value="Trbovlje">Trbovlje</option><option value="Kamnik">Kamnik</option>';
    }
    if (country == 'SLB'){
        document.getElementById('city').innerHTML = '<option value="Honiara">Honiara</option><option value="Gizo">Gizo</option><option value="Auki">Auki</option><option value="Tulagi">Tulagi</option><option value="Kirakira">Kirakira</option><option value="Lata">Lata</option><option value="Taro">Taro</option><option value="Munda">Munda</option><option value="Buala">Buala</option><option value="Gizo">Gizo</option>';
    }
    if (country == 'SOM'){
        document.getElementById('city').innerHTML = '<option value="Mogadishu">Mogadishu</option><option value="Hargeysa">Hargeysa</option><option value="Berbera">Berbera</option><option value="Kismayo">Kismayo</option><option value="Jamaame">Jamaame</option><option value="Baidoa">Baidoa</option><option value="Burao">Burao</option><option value="Bosaso">Bosaso</option><option value="Garoowe">Garoowe</option><option value="Jilib">Jilib</option>';
    }
    if (country == 'ZAF'){
        document.getElementById('city').innerHTML = '<option value="Johannesburg">Johannesburg</option><option value="Cape Town">Cape Town</option><option value="Durban">Durban</option><option value="Pretoria">Pretoria</option><option value="Port Elizabeth">Port Elizabeth</option><option value="Bloemfontein">Bloemfontein</option><option value="East London">East London</option><option value="Vereeniging">Vereeniging</option><option value="Soshanguve">Soshanguve</option><option value="Middelburg">Middelburg</option>';
    }
    if (country == 'SSD') {
        document.getElementById('city').innerHTML = '<option value="Juba">Juba</option><option value="Wau">Wau</option><option value="Malakal">Malakal</option><option value="Yei">Yei</option><option value="Yambio">Yambio</option><option value="Rumbek">Rumbek</option><option value="Bor">Bor</option><option value="Torit">Torit</option><option value="Tonj">Tonj</option><option value="Maridi">Maridi</option>';
    }
    if (country == 'ESP') {
        document.getElementById('city').innerHTML = '<option value="Madrid">Madrid</option><option value="Barcelona">Barcelona</option><option value="Valencia">Valencia</option><option value="Seville">Seville</option><option value="Zaragoza">Zaragoza</option><option value="Málaga">Málaga</option><option value="Murcia">Murcia</option><option value="Palma">Palma</option><option value="Las Palmas de Gran Canaria">Las Palmas de Gran Canaria</option><option value="Bilbao">Bilbao</option>';
    }
    if (country == 'LKA') {
        document.getElementById('city').innerHTML = '<option value="Colombo">Colombo</option><option value="Dehiwala-Mount Lavinia">Dehiwala-Mount Lavinia</option><option value="Moratuwa">Moratuwa</option><option value="Negombo">Negombo</option><option value="Kotte">Kotte</option><option value="Kandy">Kandy</option><option value="Kalmunai">Kalmunai</option><option value="Vavuniya">Vavuniya</option><option value="Galle">Galle</option><option value="Trincomalee">Trincomalee</option>';
    }
    if (country == 'SDN') {
        document.getElementById('city').innerHTML = '<option value="Khartoum">Khartoum</option><option value="Omdurman">Omdurman</option><option value="Nyala">Nyala</option><option value="Port Sudan">Port Sudan</option><option value="Kassala">Kassala</option><option value="Al-Ubayyid">Al-Ubayyid</option><option value="Kūstī">Kūstī</option><option value="Wad Madani">Wad Madani</option><option value="Al-Fashir">Al-Fashir</option><option value="Juba">Juba</option>';
    }
    if (country == 'SUR') {
        document.getElementById('city').innerHTML = '<option value="Paramaribo">Paramaribo</option><option value="Lelydorp">Lelydorp</option><option value="Nieuw Nickerie">Nieuw Nickerie</option><option value="Moengo">Moengo</option><option value="Nieuw Amsterdam">Nieuw Amsterdam</option><option value="Mariënburg">Mariënburg</option><option value="Wageningen">Wageningen</option><option value="Albina">Albina</option><option value="Groningen">Groningen</option><option value="Brownsweg">Brownsweg</option>';
    }
    if (country == 'SWE') {
        document.getElementById('city').innerHTML = '<option value="Stockholm">Stockholm</option><option value="Gothenburg">Gothenburg</option><option value="Malmö">Malmö</option><option value="Uppsala">Uppsala</option><option value="Västerås">Västerås</option><option value="Örebro">Örebro</option><option value="Linköping">Linköping</option><option value="Helsingborg">Helsingborg</option><option value="Jönköping">Jönköping</option><option value="Norrköping">Norrköping</option>';
    }
    if (country == 'CHE') {
        document.getElementById('city').innerHTML = '<option value="Zürich">Zürich</option><option value="Geneva">Geneva</option><option value="Basel">Basel</option><option value="Bern">Bern</option><option value="Lausanne">Lausanne</option><option value="Winterthur">Winterthur</option><option value="St. Gallen">St. Gallen</option><option value="Lucerne">Lucerne</option><option value="Lugano">Lugano</option><option value="Biel/Bienne">Biel/Bienne</option>';
    }
    if (country == 'SYR') {
        document.getElementById('city').innerHTML = '<option value="Damascus">Damascus</option><option value="Aleppo">Aleppo</option><option value="Homs">Homs</option><option value="Latakia">Latakia</option><option value="Dayr az Zawr">Dayr az Zawr</option><option value="Ar Raqqah">Ar Raqqah</option><option value="Al Bab">Al Bab</option><option value="Idlib">Idlib</option><option value="Duma">Duma</option><option value="As Suwayda">As Suwayda</option>';
    }
    if (country == 'TJK') {
        document.getElementById('city').innerHTML = '<option value="Dushanbe">Dushanbe</option><option value="Khujand">Khujand</option><option value="Kŭlob">Kŭlob</option><option value="Qŭrghonteppa">Qŭrghonteppa</option><option value="Istaravshan">Istaravshan</option><option value="Konibodom">Konibodom</option><option value="Kofarnihon">Kofarnihon</option><option value="Tursunzoda">Tursunzoda</option><option value="Isfara">Isfara</option><option value="Panjakent">Panjakent</option>';
    }
    if (country == 'TZA') {
        document.getElementById('city').innerHTML = '<option value="Dar es Salaam">Dar es Salaam</option><option value="Mwanza">Mwanza</option><option value="Zanzibar">Zanzibar</option><option value="Arusha">Arusha</option><option value="Mbeya">Mbeya</option><option value="Morogoro">Morogoro</option><option value="Tanga">Tanga</option><option value="Dodoma">Dodoma</option><option value="Kigoma">Kigoma</option><option value="Moshi">Moshi</option>';
    }
    if (country == 'THA') {
        document.getElementById('city').innerHTML = '<option value="Bangkok">Bangkok</option><option value="Samut Prakan">Samut Prakan</option><option value="Nonthaburi">Nonthaburi</option><option value="Udon Thani">Udon Thani</option><option value="Chon Buri">Chon Buri</option><option value="Nakhon Ratchasima">Nakhon Ratchasima</option><option value="Chiang Mai">Chiang Mai</option><option value="Hat Yai">Hat Yai</option><option value="Pak Kret">Pak Kret</option><option value="Si Racha">Si Racha</option>';
    }
    if (country == 'TLS') {
        document.getElementById('city').innerHTML = '<option value="Dili">Dili</option><option value="Same">Same</option><option value="Lospalos">Lospalos</option><option value="Maliana">Maliana</option><option value="Suai">Suai</option><option value="Viqueque">Viqueque</option><option value="Aileu">Aileu</option><option value="Liquiçá">Liquiçá</option><option value="Maubara">Maubara</option><option value="Manatuto">Manatuto</option>';
    }
    if (country == 'TGO') {
        document.getElementById('city').innerHTML = '<option value="Lomé">Lomé</option><option value="Sokodé">Sokodé</option><option value="Kara">Kara</option><option value="Atakpamé">Atakpamé</option><option value="Palimé">Palimé</option><option value="Bassar">Bassar</option><option value="Tsevie">Tsevie</option><option value="Aneho">Aneho</option><option value="Sansanné-Mango">Sansanné-Mango</option><option value="Dapaong">Dapaong</option>';
    }
    if (country == 'TON') {
        document.getElementById('city').innerHTML = '<option value="Nuku‘alofa">Nuku‘alofa</option><option value="Neiafu">Neiafu</option><option value="Havelu">Havelu</option><option value="Vaini">Vaini</option><option value="Pangai">Pangai</option><option value="‘Ohonua">‘Ohonua</option><option value="Veitongo">Veitongo</option><option value="Niutoua">Niutoua</option><option value="‘Eua">‘Eua</option><option value="Kolonga">Kolonga</option>';
    }
    if (country == 'TTO') {
        document.getElementById('city').innerHTML = '<option value="Port of Spain">Port of Spain</option><option value="Chaguanas">Chaguanas</option><option value="Mon Repos">Mon Repos</option><option value="San Fernando">San Fernando</option><option value="Arima">Arima</option><option value="Marabella">Marabella</option><option value="Point Fortin">Point Fortin</option><option value="Tunapuna">Tunapuna</option><option value="Scarborough">Scarborough</option><option value="Sangre Grande">Sangre Grande</option>';
    }
    if (country == 'TUN') {
        document.getElementById('city').innerHTML = '<option value="Tunis">Tunis</option><option value="Sfax">Sfax</option><option value="Sousse">Sousse</option><option value="Ettadhamen">Ettadhamen</option><option value="Kairouan">Kairouan</option><option value="Bizerte">Bizerte</option><option value="Gabès">Gabès</option><option value="Aryanah">Aryanah</option><option value="Gafsa">Gafsa</option><option value="El Mourouj">El Mourouj</option>';
    }
    if (country == 'TUR') {
        document.getElementById('city').innerHTML = '<option value="Istanbul">Istanbul</option><option value="Ankara">Ankara</option><option value="İzmir">İzmir</option><option value="Bursa">Bursa</option><option value="Adana">Adana</option><option value="Gaziantep">Gaziantep</option><option value="Konya">Konya</option><option value="Antalya">Antalya</option><option value="Mersin">Mersin</option><option value="Kayseri">Kayseri</option>';
    }
    if (country == 'TKM') {
        document.getElementById('city').innerHTML = '<option value="Ashgabat">Ashgabat</option><option value="Turkmenabat">Turkmenabat</option><option value="Daşoguz">Daşoguz</option><option value="Mary">Mary</option><option value="Balkanabat">Balkanabat</option><option value="Bayramaly">Bayramaly</option><option value="Türkmenbaşy">Türkmenbaşy</option><option value="Tejen">Tejen</option><option value="Gazojak">Gazojak</option><option value="Bereket">Bereket</option>';
    }
    if (country == 'TUV') {
        document.getElementById('city').innerHTML = '<option value="Funafuti">Funafuti</option><option value="Fongafale">Fongafale</option><option value="Vaiaku">Vaiaku</option><option value="Savave">Savave</option><option value="Tanrake">Tanrake</option><option value="Tamanuku">Tamanuku</option><option value="Tonga">Tonga</option><option value="Teava">Teava</option><option value="Tengako">Tengako</option><option value="Teone">Teone</option>';
    }
    if (country == 'UGA') {
        document.getElementById('city').innerHTML = '<option value="Kampala">Kampala</option><option value="Gulu">Gulu</option><option value="Lira">Lira</option><option value="Mbarara">Mbarara</option><option value="Jinja">Jinja</option><option value="Bwizibwera">Bwizibwera</option><option value="Mbale">Mbale</option><option value="Mukono">Mukono</option><option value="Kasese">Kasese</option><option value="Masaka">Masaka</option>';
    }
    if (country == 'UKR') {
        document.getElementById('city').innerHTML = '<option value="Kiev">Kiev</option><option value="Kharkiv">Kharkiv</option><option value="Odessa">Odessa</option><option value="Dnipro">Dnipro</option><option value="Donetsk">Donetsk</option><option value="Zaporizhia">Zaporizhia</option><option value="Lviv">Lviv</option><option value="Kryvyi Rih">Kryvyi Rih</option><option value="Mykolayiv">Mykolayiv</option><option value="Mariupol">Mariupol</option>';
    }
    if (country == 'ARE') {
        document.getElementById('city').innerHTML = '<option value="Dubai">Dubai</option><option value="Abu Dhabi">Abu Dhabi</option><option value="Sharjah">Sharjah</option><option value="Al Ain">Al Ain</option><option value="Ajman">Ajman</option><option value="Ras al-Khaimah">Ras al-Khaimah</option><option value="Al Fujayrah">Al Fujayrah</option><option value="Umm al Qaywayn">Umm al Qaywayn</option><option value="Khawr Fakkān">Khawr Fakkān</option><option value="Dibba Al-Fujairah">Dibba Al-Fujairah</option>';
    }
    if (country == 'GBR') {
        document.getElementById('city').innerHTML = '<option value="London">London</option><option value="Birmingham">Birmingham</option><option value="Liverpool">Liverpool</option><option value="Nottingham">Nottingham</option><option value="Sheffield">Sheffield</option><option value="Bristol">Bristol</option><option value="Glasgow">Glasgow</option><option value="Leeds">Leeds</option><option value="Manchester">Manchester</option><option value="Edinburgh">Edinburgh</option>';
    }
    if (country == 'USA') {
        document.getElementById('city').innerHTML = '<option value="New York City">New York City</option><option value="Los Angeles">Los Angeles</option><option value="Chicago">Chicago</option><option value="Houston">Houston</option><option value="Phoenix">Phoenix</option><option value="Philadelphia">Philadelphia</option><option value="San Antonio">San Antonio</option><option value="San Diego">San Diego</option><option value="Dallas">Dallas</option><option value="San Jose">San Jose</option>';
    }
    if (country == 'URY') {
        document.getElementById('city').innerHTML = '<option value="Montevideo">Montevideo</option><option value="Salto">Salto</option><option value="Paysandú">Paysandú</option><option value="Las Piedras">Las Piedras</option><option value="Rivera">Rivera</option><option value="Maldonado">Maldonado</option><option value="Tacuarembó">Tacuarembó</option><option value="Melo">Melo</option><option value="Mercedes">Mercedes</option><option value="Artigas">Artigas</option>';
    }
    if (country == 'UZB') {
        document.getElementById('city').innerHTML = '<option value="Tashkent">Tashkent</option><option value="Namangan">Namangan</option><option value="Samarkand">Samarkand</option><option value="Andijon">Andijon</option><option value="Bukhara">Bukhara</option><option value="Nukus">Nukus</option><option value="Qarshi">Qarshi</option><option value="Jizzax">Jizzax</option><option value="Urganch">Urganch</option><option value="Fergana">Fergana</option>';
    }
    if (country == 'VUT') {
        document.getElementById('city').innerHTML = '<option value="Port Vila">Port Vila</option><option value="Luganville">Luganville</option><option value="Norsup">Norsup</option><option value="Isangel">Isangel</option><option value="Sola">Sola</option><option value="Lakatoro">Lakatoro</option><option value="Saratamata">Saratamata</option><option value="Sola">Sola</option><option value="Lakatoro">Lakatoro</option><option value="Saratamata">Saratamata</option>';
    }
    if (country == 'VAT') {
        document.getElementById('city').innerHTML = '<option value="Vatican City">Vatican City</option>';
    }
    if (country == 'VEN') {
        document.getElementById('city').innerHTML = '<option value="Caracas">Caracas</option><option value="Maracaibo">Maracaibo</option><option value="Maracay">Maracay</option><option value="Valencia">Valencia</option><option value="Barquisimeto">Barquisimeto</option><option value="Ciudad Guayana">Ciudad Guayana</option><option value="Barcelona">Barcelona</option><option value="Maturín">Maturín</option><option value="Puerto La Cruz">Puerto La Cruz</option><option value="Petare">Petare</option>';
    }
    if (country == 'VNM') {
        document.getElementById('city').innerHTML = '<option value="Ho Chi Minh City">Ho Chi Minh City</option><option value="Hanoi">Hanoi</option><option value="Haiphong">Haiphong</option><option value="Biên Hòa">Biên Hòa</option><option value="Đà Nẵng">Đà Nẵng</option><option value="Nha Trang">Nha Trang</option><option value="Can Tho">Can Tho</option><option value="Rach Gia">Rach Gia</option><option value="Quy Nhơn">Quy Nhơn</option><option value="Vũng Tàu">Vũng Tàu</option>';
    }
    if (country == 'YEM') {
        document.getElementById('city').innerHTML = '<option value="Sanaa">Sanaa</option><option value="Al Hudaydah">Al Hudaydah</option><option value="Ta‘izz">Ta‘izz</option><option value="Aden">Aden</option><option value="Al Mukalla">Al Mukalla</option><option value="Ibb">Ibb</option><option value="Dhamar">Dhamar</option><option value="Amran">Amran</option><option value="Sayyan">Sayyan</option><option value="Zabid">Zabid</option>';
    }
    if (country == 'ZMB') {
        document.getElementById('city').innerHTML = '<option value="Lusaka">Lusaka</option><option value="Kitwe">Kitwe</option><option value="Ndola">Ndola</option><option value="Kabwe">Kabwe</option><option value="Chingola">Chingola</option><option value="Mufulira">Mufulira</option><option value="Luanshya">Luanshya</option><option value="Livingstone">Livingstone</option><option value="Kasama">Kasama</option><option value="Chipata">Chipata</option>';
    }
    if (country == 'ZWE') {
        document.getElementById('city').innerHTML = '<option value="Harare">Harare</option><option value="Bulawayo">Bulawayo</option><option value="Chitungwiza">Chitungwiza</option><option value="Mutare">Mutare</option><option value="Gweru">Gweru</option><option value="Epworth">Epworth</option><option value="Kwekwe">Kwekwe</option><option value="Kadoma">Kadoma</option><option value="Masvingo">Masvingo</option><option value="Chinhoyi">Chinhoyi</option>';
    }
}

function getSelectedCountry() {
    const selectElement = document.getElementById('country');
    const selectedCountry = selectElement.value;
    if (selectedCountry != "") {
        enableSelect(selectedCountry);
    }
}

function getSelectedCity() {
    const selectElement = document.getElementById('city');
    const selectedCity = selectElement.value;
    if (selectedCity != "") {
        getWeatherByCity(selectedCity);
    }
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    alert = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    getWeatherByCoordinates(position);
  }

const apiKey = '1184208586914239a60123445251202'

async function getWeatherByCity(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
    const data = await response.json();
    returnWeather(data)
}

async function getWeatherByCoordinates(position) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${position.coords.latitude},${position.coords.longitude}`);
    const data = await response.json();
    returnWeather(data)
}

function returnWeather(data) {
    document.getElementById('Weather').innerHTML = 
    `<h2>${data.location.name}, ${data.location.country}</h2>
    <p>${data.location.localtime}</p>
    <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
    <h3>Temperature: ${data.current.temp_c}°C</h3>
    <p>${data.current.condition.text}</p>
    <p>Wind Speed: ${data.current.wind_kph} km/h</p>`;
}