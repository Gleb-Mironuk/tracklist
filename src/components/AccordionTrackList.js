import React from "react";
import {useSelector} from 'react-redux';
import Accordion from "react-bootstrap/Accordion";
import note from "../icons/music-note-beamed.svg";



function AccordionTrackList() {
  const tracks = useSelector((state) => state.tracks.tracks)

  function trackTimeMinutes(millisec) {
    let seconds = (millisec / 1000).toFixed(0);
    let minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    seconds = seconds >= 10 ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
  }
 
    const results = Object.values(tracks)
    const trackslist = results[1]

  return (
    <Accordion>
    {trackslist && trackslist.map((track, i) => (
        <Accordion.Item className="accordion-item" eventKey={track} style={{backgroundColor: i % 2 === 0 ? '#b4cff5' : 'aliceblue'}}>
        <Accordion.Header className="accordion-header">
          <article className="accordion-button-item">
            <section className="accordion-sectionImg">
              <img
                className="accordion-img"
                src={track.artworkUrl60}
                alt=""
              ></img>
              <div>{track.artistName}</div>
            </section>
            <section className="accordion-section">
              <div className="table-thead-trackName">{track.trackName}</div>
              <div className="table-thead-collection">
                {track.collectionName}
              </div>
              <div className="table-thead-genre">{track.primaryGenreName}</div>
            </section>
          </article>
        </Accordion.Header>
        <Accordion.Body>
          <article className="accordion-open">
            <p>
              {track.artistName} - {track.trackName}{" "}
              <img src={note} alt="note"></img>
            </p>
            <span className="accordion-open-text">
              <b>Collection:</b> {track.collectionName}
            </span>
            <span className="accordion-open-text">
              <b>Track Count:</b> {track.trackCount}{" "}
            </span>
            <span className="accordion-open-text">
              {" "}
              <b>Price:</b> {track.collectionPrice} {track.currency}
            </span>
          </article>
          <article className="accordion-open-track">
            <span className="accordion-open-text">
              <b>Track duration:</b> {trackTimeMinutes(track.trackTimeMillis)}
            </span>
            <span className="accordion-open-text">
              <b>Track Price:</b> {track.trackPrice} {track.currency}
            </span>
          </article>
        </Accordion.Body>
      </Accordion.Item>
    ))}
    </Accordion>
  );
}
export default AccordionTrackList;
