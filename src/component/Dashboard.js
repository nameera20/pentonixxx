import React, { useState, useEffect } from 'react';

function Dashboard({ username }) {
  const [filterOption, setFilterOption] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [tableData, setTableData] = useState([]);

  const fetchRandomData = async () => {
    try {
      const response = await fetch('http://afc7a104784594208b12c3474fa3c924-1060237241.us-east-2.elb.amazonaws.com:9002/random-data');
      if (response.ok) {
        const data = await response.json();
        setTableData(data);
      } else {
        console.error('Failed to fetch data from the API');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchRandomData();
  }, []);

  const filteredData = tableData.filter((item) => {
    if (!filterOption || item.category === filterOption) {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return false;
  });

  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <div>
        
        <select
          value={filterOption}
          onChange={(e) => setFilterOption(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Category1">Category 1</option>
          <option value="Category2">Category 2</option>
        </select>

        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
