import './App.css';

import { useEffect, useState } from 'react';

const App = () => {
    // Depremleri saklamak için state kullanımı
    const [earthquakes, setEarthquakes] = useState([]);

    // Komponent yüklendiğinde API'den deprem verilerini alma
    useEffect(() => {
        fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson')
            .then(response => response.json())
            .then(data => {
                // Gelen verileri state'e set etme
                setEarthquakes(data.features.slice(0, 25));
            })
            .catch(error => console.error('Deprem verileri alınamadı.', error));
    }, []);

    return (
        // Ana container için CSS class'ları
        <div className="Eq-format-container">
            {/* Başlık */}
            <h1 className="earthquake-title">LATEST EARTHQUAKES IN THE WORLD</h1>
            {/* Deprem listesi container */}
            <div className="Eq-courses_box">
                {/* Deprem listesi */}
                {earthquakes.map((deprem, index) => (
                    
                    <div key={index} className="Eq-courses_item">
                        
                        <div href="#" className="Eq-courses-item_area">
                            
                            <div className="Eq-courses-item_bg"></div>
                            
                            <div className="Eq-courses-item_title">
                                {/* Şiddet */}
                                <strong>Magnitude:</strong> {deprem.properties.mag}<br />
                                {/* Lokasyon */}
                                <strong>Location:</strong> {deprem.properties.place}<br />
                                {/* Zaman */}
                                <strong>Time / Date:</strong> {new Date(deprem.properties.time).toLocaleString()}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
