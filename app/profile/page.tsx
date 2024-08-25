"use client";
// Profile.tsx
import { faUser, faPen } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Pagination } from 'react-bootstrap'; // Import Pagination
import Header from "../components/Header";
import "./profile.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const resultsPerPage = 10; // Number of results per page

export default function Profile() {
  const [currentPage, setCurrentPage] = useState(1);

  const results = [
    { wpm: 75, characters: 300, date: '2024-08-23' },
    { wpm: 85, characters: 350, date: '2024-08-24' },
    { wpm: 85, characters: 350, date: '2024-08-24' },
    { wpm: 85, characters: 350, date: '2024-08-24' },
    { wpm: 85, characters: 350, date: '2024-08-24' },
    { wpm: 85, characters: 350, date: '2024-08-24' },
    { wpm: 85, characters: 350, date: '2024-08-24' },
    { wpm: 85, characters: 350, date: '2024-08-24' },
    { wpm: 85, characters: 350, date: '2024-08-24' },
    { wpm: 85, characters: 350, date: '2024-08-24' },
    { wpm: 85, characters: 350, date: '2024-08-24' },
    { wpm: 85, characters: 350, date: '2024-08-24' },
    // Add more results as needed
  ];

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

  const pageNumbers = Math.ceil(results.length / resultsPerPage);

  return (
    <>
      <Header />
      <div className="container profile-container">
        <div className="userSection">
          <div className="user-info">
            <FontAwesomeIcon className="user-icon" icon={faUser} />
            <div className="user-details">
              <h2 className="user-name">John Doe</h2>
            </div>
          </div>
          <FontAwesomeIcon className="btn edit-icon" icon={faPen} onClick={()=>console.log("edit")} />
        </div>

        <div className="result-table mt-5">

          <table className="custom-table table-striped table-dark">
            <thead>
              <tr>
                <th>WPM</th>
                <th>Characters</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {currentResults.map((result, index) => (
                 <tr key={index}>
                  <td>{result.wpm}</td>
                  <td>{result.characters}</td>
                  <td>{result.date}</td>
                </tr>
              ))}
            </tbody>
          </table>


          <Pagination className="justify-content-center custom-pagination">
  <Pagination.Prev
    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
  />
  {[...Array(pageNumbers)].map((_, index) => (
    <Pagination.Item
      key={index + 1}
      active={index + 1 === currentPage}
      onClick={() => setCurrentPage(index + 1)}
    >
      {index + 1}
    </Pagination.Item>
  ))}
  <Pagination.Next
    onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageNumbers))}
  />
</Pagination>

        </div>
      </div>
    </>
  );
}
