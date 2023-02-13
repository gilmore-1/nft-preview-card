
export interface Theme {
    Colors: {
        Primary: {
            Softblue: string
            Cyan: string
    
        }
        Neutral: {
            MainBG: string,
            CardBG: String,
            Line: String,
            White: String,
        }
    }
    Typography: {
        paragraph:{
            FontSize: string;
        }
    }



  }
  export const defaultTheme: Theme= {
    Colors: {
        Primary:{
            Softblue: "hsl(215, 51%, 70%)",
            Cyan: "hsl(178, 100%, 50%)"
        },
        Neutral: {
            MainBG: "hsl(217, 54%, 11%)",
            CardBG: "hsl(216, 50%, 16%)",
            Line: "hsl(215, 32%, 27%)",
            White: "hsl(0, 0%, 100%)"
        }
    },
    Typography: {
        paragraph:{
            FontSize: "18px"
        }
    }

};
    