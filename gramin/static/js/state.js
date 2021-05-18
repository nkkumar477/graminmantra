var Bokaro = ["Nawadih","Chandrapura","Bermo","Gumia","Peterwar","Kasmar","Jaridih","Chas","Chandankiyari"];

var Chatra = ["Chatra","Kunda","Hunterganj","Pratappur","Lawalong","Gidhour","Pathalgada","Simaria","Tandwa","Itkhori","Kanhachatti","Mayurhand"]; 

var Deoghar = ["Deoghar","Madhupur","Mohanpur","Sarath","Palojori","Devipur","Sarwan","Karon","Margo Munda","Sona Rai Tharhi"]; 

var Dhanbad = ["Baghmara","Baliapur","Dhanbad","Govindpur","Nirsa","Topchanchi","Tundi","Purvi Tundi","Egarkund","Kaliasole"]; 

var Dumka = ["Dumka","Gopikandar ","Jama","Jarmundi","Kathikund","Masaliya","Ramgarh","Ranishwar","Saraiyahat","Shikaripara"];
 
var EastSinghbhum = ["Patamda","Boram","Golmuri-Cum-Jugsalai","Ghatshila","Potka","Musabani","Dumaria","Dhalbhumgarh","Gurbandha","Chakulia","Baharagora"]; 

var Garhwa = ["Garhwa Sadar","Meral","Ramna","Banshidhar Nagar","Bhawanathpur","Bardiha","Bhandaria","Chinia","Ranka","Ramkanda","Dhurki","Bishunpura","Manjhiaon","Kandi","Kharaundhi","Danda","Dandai","Bargarh","Ketar","Sagma"]; 

var Giridih = ["Bagodar","Bengabad","Birni","Deori","Dhanwar","Dumri","Gandey","Gawan","Giridih","Jamua","Pirtand","Suriya","Tisri"]; 

var Godda = ["Meherma","Thakurgangti","Boarijor","Mahagama","Pathargama","Bashant Rai*","Godda","Poreyahat","Sundarpahari"]; 

var Gumla = ["Bishunpur","Ghaghra","Sisai","Bharno","Kamdara","Basia","Gumla","Chainpur","Dumri","Albert Ekka","Raidih","Palkot"]; 

var Hazaribagh = ["Barhi","Barkagaon","Barkatha","Bishnugarh","Chalkusa","Chauparan","Churchu","Dadi","Daru","Ichak","Katkamdag","Katkamsandi","Keredari","Padma","Hazaribag Sadar","Tatijharia"]; 

var Jamtara = ["Jamtara","Narayanpur","Nala","Karma Tanr Vidyasagar*","Fatehpur","Kundhit"]; 

var Khunti = ["Khunti","Karra","Torpa","Murhu","Erki(Tamar II)","Rania"]; 

var Koderma = ["Koderma","Jainagar","Domchanch","Markacho","Satgawan","Chandwara"]; 

var Latehar = ["Latehar","Chandwa","Balumath","Manika","Barwadih","Garu","Mahuadanr","Bariyatu","Herhanj"]; 

var Lohardaga = ["Bhandra","Kairo","Kisko","Kuru","Lohardaga","Peshrar","Senha"]; 

var Pakur = ["Pakur","Hiranpur","Littipara","Amrapara","Maheshpur","Pakuria"]; 

var Palamu = ["Sadar Medininagar","Chainpur","Patan","Bishrampur","Panki","Manatu","Satbarwa","Lesliganj","Tarhasi","Pandwa","Pandu","UtariRoad","Nawabazar","Ramgarh","Chhatarpur","Hariharganj","NaudihaBazar","Pipra","Hussainabad","Mohamadganj","Haidernagar"]; 

var Ramgarh = ["Mandu","Patratu","Ramgarh","Gola","Chitarpur","Dulmi"]; 

var Ranchi = ["Burmu","Khelari","Kanke","Ormanjhi","Angara","Rahe","Silli","Sonahatu","Namkum","Ratu","Nagri","Mandar","Chanho","Bero","Itki","Lapung","Bundu","Tamar"]; 

var Sahibganj = ["Barharwa","Udhwa","Rajmahal","Sahibganj","Barhait","Borio","Pathna","Taljhari","Mandro"]; 

var Simdega = ["Bano","Bansjore","Bolba","Jaldega","Kersai","Kolebira","Kurdeg","Pakartanr","Simdega","Thethaitangar"];
 
var WestSinghbhum = ["Sonua","Gudri","Bandgaon","Chakradharpur","Khuntpani","Goilkera","Anandpur","Manoharpur","Noamundi","Tonto","HatGamharia","Chaibasa","Tantnagar","Manjhari","Jhinkpani","Jagannathpur","Kumardungi","Majhgaon"]; 

var SeraikellaKharsawan = ["Adityapur(Gamharia)","Chandil","Gobindpur(Rajnagar)","Saraikela","Kharsawan","Ichagarh","Nimdih","Kuchai","Kukru"];


$("#inputState").change(function(){
  var StateSelected = $(this).val();
  var optionsList;
  var htmlString = "";

  switch (StateSelected) {
    case "Bokaro":
        optionsList = Bokaro;
        break;
    case "Chatra":
        optionsList = Chatra;
        break;
    case "Deoghar":
        optionsList = Deoghar;
        break;
    case "Dhanbad":
        optionsList = Dhanbad;
        break;
    case "Dumka":
        optionsList = Dumka;
        break;
    case "East Singhbhum":
        optionsList = EastSinghbhum;
        break;
    case  "Garhwa":
        optionsList = Garhwa;
        break;
    case "Giridih":
        optionsList = Giridih;
        break;
    case "Godda":
        optionsList = Godda;
        break;
    case "Gumla":
        optionsList = Gumla;
        break;
    case "Hazaribag":
        optionsList = Hazaribag;
        break;
    case  "Jamtara":
        optionsList = Jamtara;
        break;
    case "Khunti":
        optionsList = Khunti;
        break;
    case  "Koderma":
        optionsList = Koderma;
        break;
    case "Latehar":
        optionsList = Latehar;
        break;
    case  "Lohardaga":
        optionsList = Lohardaga;
        break;
    case "Pakur":
        optionsList = Pakur ;
        break;
    case  "Palamu":
        optionsList = Palamu;
        break;
    case "Ramgarh":
        optionsList = Ramgarh;
        break;
    case  "Ranchi":
        optionsList = Ranchi;
        break;
    case "Sahibganj":
        optionsList = Sahibganj;
        break;
    case  "Seraikella Kharsawan":
        optionsList = SeraikellaKharsawan;
        break;
    case "Simdega":
        optionsList = Simdega;
        break;
    case  "West Singhbhum":
        optionsList = WestSinghbhum;
        break;
}


  for(var i = 0; i < optionsList.length; i++){
    htmlString = htmlString+"<option value='"+ optionsList[i] +"'>"+ optionsList[i] +"</option>";
  }
  $("#inputDistrict").html(htmlString);

});