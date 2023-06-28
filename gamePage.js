const pictureUrl = {
    "male-mage" : "https://recursionist.io/img/dashboard/lessons/quickstart/male-mage.png",
    "female-mage" : "https://recursionist.io/img/dashboard/lessons/quickstart/female-mage.png",
    "male-warrior" : "https://recursionist.io/img/dashboard/lessons/quickstart/male-warrior.png",
    "female-warrior" : "https://recursionist.io/img/dashboard/lessons/quickstart/female-warrior.png",
    "male-hero" : "https://recursionist.io/img/dashboard/lessons/quickstart/male-hero.png",
    "female-hero" : "https://recursionist.io/img/dashboard/lessons/quickstart/female-hero.png"
    
}




var app = new Vue({
    el: '#app',
    data: {
    // basic-info
      Name: 'who are u?',
      Gender: 'Male',
      Class: 'Hero',
      Traits: 'Everyman',

    // power-info
      Strength: '10',
      Agility: '10',
      Resilience: '10',
      Wisdom: '10',
      Luck: '10',


    // screen-info
      bgcolor: '#326826',
    },

    computed: {
        displayUrl : function(){
            let result = pictureUrl["male-hero"];

            // 男の場合
            if(this.Gender == 'Male'){
                switch(this.Class){
                    case 'Mage':
                        result = pictureUrl["male-mage"];
                        break;
                    case 'Warrior':
                        result = pictureUrl["male-warrior"];
                        break;
                    case 'Hero':
                        result = pictureUrl["male-hero"];
                        break;
                    default:
                        result = pictureUrl["male-hero"];
                }
            }

            //　女の場合
            else {
                switch(this.Class){
                    case 'Mage':
                        result = pictureUrl["female-mage"];
                        break;
                    case 'Warrior':
                        result = pictureUrl["female-warrior"];
                        break;
                    case 'Hero':
                        result = pictureUrl["female-hero"];
                        break;
                    default:
                        result = pictureUrl["female-hero"];
                }
            }

        return result;
        },

        displayStrength : function(){
            let result = this.Strength;

            if(this.Class == "Hero" && this.Traits == "Brave") result *= 1.1;
            else if(this.Gender == "Female" && this.Traits == "Tomboy") result *= 1.1;
            
            return result;
        },

        displayAgility : function(){
            let result = this.Agility;

            if(this.Traits == "Bat out of hell") result *= 1.4;
            else if(this.Class == "Hero" && this.Traits == "Brave") result *= 1.1;
            else if(this.Gender == "Female" && this.Traits == "Tomboy") result *= 1.1;
            
            return result;
        },

        displayResilience : function(){
            let result = this.Resilience;

            return result;
        },

        displayWisdom : function(){
            let result = this.Wisdom;

            return result;
        },

        displayLuck : function(){
            let result = this.Luck;

            if(this.Gender == "Male" && this.Traits == "Lucky devil") result *= 1.5;
            else if(this.Class == "Hero" && this.Traits == "Brave") result *= 1.2;

            return result;
        },


    }


  });