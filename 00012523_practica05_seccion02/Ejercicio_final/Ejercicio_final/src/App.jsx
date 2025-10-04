import './App.css'

function Cientifico({ nombre, profesion, premios, descubrimiento, imagen }) {
  return (
    <div className="cientifico-card">
      <div className="cientifico-header">
        <h3>{nombre}</h3>
        {imagen && (
          <img src={imagen} alt={nombre} className="cientifico-imagen" />
        )}
      </div>
      <p>
        <li>
          <strong>Profesión:</strong> {profesion}
        </li>
      </p>
      <p>
        <li>
          <strong>Premios:</strong> {premios}
        </li>
      </p>
      <p>
        <li>
          <strong>Descubrió:</strong> {descubrimiento}
        </li>
      </p>
    </div>
  );
}

function App() {
  const cientificos = [
    {
      nombre: "Maria Skłodowska-Curie",
      profesion: "física y química",
      premios:
        "4 (Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci)",
      descubrimiento: "polonio (elemento químico)",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/c/c8/Marie_Curie_c._1920s.jpg",
    },
    {
      nombre: "Katsuko Saruhashi",
      profesion: "geoquímica",
      premios: "2 (Premio Miyake de geoquímica, Premio Tanaka)",
      descubrimiento:
        "un método para medir el dióxido de carbono en el agua de mar",
      imagen:
        "https://upload.wikimedia.org/wikipedia/en/0/08/Katsuko_Saruhashi.jpg",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h2>Científicos Notables</h2>
        <div className="cientificos-container">
          {cientificos.map((cientifico, index) => (
            <Cientifico
              key={index}
              nombre={cientifico.nombre}
              profesion={cientifico.profesion}
              premios={cientifico.premios}
              descubrimiento={cientifico.descubrimiento}
              imagen={cientifico.imagen}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;