// This example creates circles on the map, representing populations in North
// America.

// First, create an object containing LatLng and population for each city.


  
  const citymap= {
    /*MultanCity: {
      center: {
        lat: 30.1868854, lng: 71.45234902
      },
    population: 172526,
    },
    
    MultanSaddar: {
        center: {
          lat: 30.14421349, lng: 71.54950679
        },
        population: 194537,
    },
    Shuabad: {
        center: {
          lat: 29.83451883, lng: 71.31420757
        },
        population: 1534799,
    },
    JalalpurPirwala: {
        center: {
          lat: 29.5681584, lng: 71.20756145
        },
        population: 1350521,
    },*/
    
    /*Wazir: {
      center: {
        lat: 33.07901265, lng: 70.58109342
      },
    population: 172526,
    },
    
    Bannu: {
        center: {
          lat: 32.90075039, lng: 70.56514781
        },
        population: 194537,
    },
    Domel: {
        center: {
          lat: 32.94852328, lng: 70.79727255
        },
        population: 534799,
    },*/
    
    BarChamarkand: {
        center: {
          lat: 34.72863005, lng: 71.20242654
        },
        population: 50521,
    },
    /*Barang: {
      center: {
        lat: 34.62163161, lng: 71.61965426
      },
    population: 72526,
    },
    Khar: {
        center: {
          lat: 34.72456968, lng: 71.48362227
        },
        population: 94537,
    },
    Mamund: {
        center: {
          lat: 34.8279816, lng: 71.38678089
        },
        population: 20070,
    },
    Nawagai: {
        center: {
          lat: 34.73355647, lng: 71.29066224
        },
        population: 14099,
    },
    SalarzaiTehsil: {
        center: {
          lat: 34.87015244, lng: 71.52788154
        },
        population: 30000,
    },
    UtmanKhelTehsil: {
        center: {
          lat: 34.74127955, lng: 71.70121836
        },
        population: 34799,
    },*/
  };
  
  function initMap() {
    q = window.location.search;
 
  if(q != '') {
    //document.getElementById('queryData').value = q;
    q1 = q.split('&');
    document.getElementById('queryData').innerHTML = q1[0];
    console.log(q1[0]);
  }
 
    // Create the map.
    const map = new google.maps.Map(
      document.getElementById("map"),
      {
        center: {
          lat: 34.72863005, lng: 71.20242654
            },
          zoom: 7,
        mapTypeId: "terrain",
      }
    );
  
    // Construct the circle for each value in citymap.
    // Note: We scale the area of the circle based on the population.
    for (const city in citymap) {
      // Add the circle for this city to the map.
      const cityCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        center: citymap[city].center,
        radius: Math.sqrt(citymap[city].population)*15,
      });
    }
  }