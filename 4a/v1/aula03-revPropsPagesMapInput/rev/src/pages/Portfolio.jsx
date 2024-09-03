import Onibus from "../components/Onibus";
import Titulo from "../components/Titulo"
import './Portfolio.css'
function Portfolio() {
    const buzoes = [
        { id: Date.now() + 0, modelo: "Mercedes-Benz OF-1721", placa: "ABC-1234", ano: 2015 },
        { id: Date.now() + 1, modelo: "Volvo B270F", placa: "XYZ-5678", ano: 2018 },
        { id: Date.now() + 2, modelo: "Scania K310", placa: "JKL-9101", ano: 2020 },
        { id: Date.now() + 3, modelo: "Volkswagen 17.230", placa: "LMN-2345", ano: 2017 },
        { id: Date.now() + 4, modelo: "MAN Lion’s City", placa: "OPQ-6789", ano: 2021 },
        { id: Date.now() + 5, modelo: "Caio Apache VIP", placa: "RST-1122", ano: 2016 },
        { id: Date.now() + 6, modelo: "Mercedes-Benz O-500", placa: "UVW-3344", ano: 2019 },
        { id: Date.now() + 7, modelo: "Volvo B340M", placa: "XYZ-5566", ano: 2022 },
        { id: Date.now() + 8, modelo: "Iveco Daily", placa: "ABC-7788", ano: 2014 },
        { id: Date.now() + 9, modelo: "Agrale MT15", placa: "JKL-9900", ano: 2013 },
        { id: Date.now() + 10, modelo: "Neobus Spectrum", placa: "LMN-1221", ano: 2018 },
        { id: Date.now() + 11, modelo: "Marcopolo Torino", placa: "OPQ-3443", ano: 2020 },
        { id: Date.now() + 12, modelo: "Volkswagen 18.310", placa: "RST-5565", ano: 2021 },
        { id: Date.now() + 13, modelo: "Volvo B290R", placa: "UVW-6677", ano: 2019 },
        { id: Date.now() + 14, modelo: "Mercedes-Benz OF-1519", placa: "XYZ-8899", ano: 2017 },
        { id: Date.now() + 15, modelo: "Caio Millennium BRT", placa: "ABC-1010", ano: 2015 },
        { id: Date.now() + 16, modelo: "Scania K400", placa: "JKL-2121", ano: 2021 },
        { id: Date.now() + 17, modelo: "Mercedes-Benz OF-1621", placa: "LMN-3232", ano: 2016 },
        { id: Date.now() + 18, modelo: "Volvo B420R", placa: "OPQ-4343", ano: 2022 },
        { id: Date.now() + 19, modelo: "Volkswagen 17.280", placa: "RST-5454", ano: 2019 }
    ];

  return (
    <div>
      <Titulo texto={"Portfólio"} emoji={"💲"}/>
      <p>Estamos na página de portfólio</p>
    <div className="buzoes">
        {buzoes.map( (onibus) => (
            <Onibus onibus={onibus} key={onibus.id} />
        ) )}
    </div>

    </div>
  )
}

export default Portfolio
