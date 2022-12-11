import React from "react";
import AccordionTrackList from "./AccordionTrackList";
import "../css/style.css";


function TrackList() {
  return (
    <div className="accordion-container">
      <table className="table">
        <thead>
          <div>
            <article className="accordion-button-item">
              <section className="table-thead-name">
                <div>Artist</div>
              </section>
              <section className="table-thead-track">
                <div className="table-thead-trackName">Track</div>
                <div className="table-thead-collection">Collection</div>
                <div className="table-thead-genre">Genre</div>
              </section>
            </article>
          </div>
        </thead>
        <tbody>
          <tr>
            <th colSpan="4">
              <AccordionTrackList />
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TrackList;
