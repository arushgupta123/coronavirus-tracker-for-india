function hi(code) {
        fetch("https://api.covid19india.org/state_district_wise.json").then( (imported_data) => {
            return imported_data.json();
        }).then( (realdata) => {
            console.log(realdata);
            const country_name = realdata.Countries[`${code}`];
            //
        }).catch( (error) => {
            console.log(error)
        })
    }
