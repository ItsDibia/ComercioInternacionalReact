import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const MarketDashboard = () => {
  const [sectorsData, setSectorsData] = useState([]);
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('sectors');
  const [chartType, setChartType] = useState('line');

  const API_BASE_URL = 'https://apicomerciointernacionalreact.onrender.com/';

  // Función para obtener datos de sectores
  const fetchSectorsData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/identificacion-mercados`);
      if (!response.ok) {
        throw new Error('Error al obtener datos de sectores');
      }
      const result = await response.json();
      setSectorsData(result.data);
    } catch (err) {
      setError(err.message);
    }
  };

  // Función para obtener datos de países
  const fetchCountriesData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/comportamiento-mercado`);
      if (!response.ok) {
        throw new Error('Error al obtener datos de países');
      }
      const result = await response.json();
      setCountriesData(result.data);
    } catch (err) {
      setError(err.message);
    }
  };

  // Cargar datos al montar el componente
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        await Promise.all([fetchSectorsData(), fetchCountriesData()]);
      } catch (err) {
        setError('Error al cargar los datos');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Preparar datos para el gráfico
  const prepareChartData = (data) => {
    if (!data || data.length === 0) return [];

    // Crear estructura de datos para Recharts
    const periods = ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'];
    
    return periods.map((period, index) => {
      const dataPoint = { period };
      data.forEach(item => {
        dataPoint[item.label] = item.data[index] || 0;
      });
      return dataPoint;
    });
  };

  // Generar colores para las líneas/barras
  const getColors = (data) => {
    const colors = [
      '#FF6384', '#36A2EB', '#4BC0C0', '#9966FF', '#FF9F40',
      '#FFCD56', '#C9CBCF', '#FF4081', '#00FF00', '#FF8C00',
      '#800080', '#00FFFF', '#FF6347', '#FFD700'
    ];
    return data.map((_, index) => colors[index % colors.length]);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Cargando datos del mercado...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <div className="flex items-center mb-4">
            <div className="bg-red-100 rounded-full p-2 mr-3">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-red-800">Error de conexión</h3>
          </div>
          <p className="text-red-700 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
          >
            Intentar nuevamente
          </button>
        </div>
      </div>
    );
  }

  const currentData = activeTab === 'sectors' ? sectorsData : countriesData;
  const chartData = prepareChartData(currentData);
  const colors = getColors(currentData);

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Dashboard de Análisis de Mercado
            </h1>
            <p className="text-gray-600 text-lg">
              Visualización de datos de mercado por sectores y países
            </p>
          </div>

          {/* Controls */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              {/* Tab Selection */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('sectors')}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    activeTab === 'sectors'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Sectores
                </button>
                <button
                  onClick={() => setActiveTab('countries')}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    activeTab === 'countries'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Países
                </button>
              </div>

              {/* Chart Type Selection */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setChartType('line')}
                  className={`px-4 py-2 rounded-md font-medium transition-all ${
                    chartType === 'line'
                      ? 'bg-green-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Líneas
                </button>
                <button
                  onClick={() => setChartType('bar')}
                  className={`px-4 py-2 rounded-md font-medium transition-all ${
                    chartType === 'bar'
                      ? 'bg-green-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Barras
                </button>
              </div>
            </div>
          </div>

          {/* Chart Container */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              {activeTab === 'sectors' ? 'Identificación de Mercados por Sectores' : 'Comportamiento de Mercado por Países'}
            </h2>
            
            <div className="w-full h-96">
              <ResponsiveContainer width="100%" height="100%">
                {chartType === 'line' ? (
                  <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis 
                      dataKey="period" 
                      tick={{ fill: '#6B7280', fontSize: 12 }}
                      tickLine={{ stroke: '#6B7280' }}
                    />
                    <YAxis 
                      tick={{ fill: '#6B7280', fontSize: 12 }}
                      tickLine={{ stroke: '#6B7280' }}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: 'none',
                        borderRadius: '8px',
                        color: 'white'
                      }}
                    />
                    <Legend />
                    {currentData.map((item, index) => (
                      <Line
                        key={item.label}
                        type="monotone"
                        dataKey={item.label}
                        stroke={colors[index]}
                        strokeWidth={2}
                        dot={{ fill: colors[index], strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: colors[index], strokeWidth: 2 }}
                      />
                    ))}
                  </LineChart>
                ) : (
                  <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis 
                      dataKey="period" 
                      tick={{ fill: '#6B7280', fontSize: 12 }}
                      tickLine={{ stroke: '#6B7280' }}
                    />
                    <YAxis 
                      tick={{ fill: '#6B7280', fontSize: 12 }}
                      tickLine={{ stroke: '#6B7280' }}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: 'none',
                        borderRadius: '8px',
                        color: 'white'
                      }}
                    />
                    <Legend />
                    {currentData.map((item, index) => (
                      <Bar
                        key={item.label}
                        dataKey={item.label}
                        fill={colors[index]}
                        radius={[2, 2, 0, 0]}
                      />
                    ))}
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currentData.slice(0, 4).map((item, index) => {
            const values = item.data;
            const avg = Math.round(values.reduce((a, b) => a + b, 0) / values.length);
            const max = Math.max(...values);
            const min = Math.min(...values);
            const trend = values[values.length - 1] > values[0] ? 'up' : 'down';

            return (
              <div key={item.label} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">{item.label}</h3>
                  <div className={`p-2 rounded-full ${trend === 'up' ? 'bg-green-100' : 'bg-red-100'}`}>
                    <svg className={`w-4 h-4 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={trend === 'up' ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" : "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"} />
                    </svg>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Promedio:</span>
                    <span className="font-semibold">{avg}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Máximo:</span>
                    <span className="font-semibold text-green-600">{max}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mínimo:</span>
                    <span className="font-semibold text-red-600">{min}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default MarketDashboard;