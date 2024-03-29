import './App.css';
import OtherDetails from './OtherDetails';

function App() {

  const rooms = ['Banquet', 'Room 125-132', 'Room 239-241', 'Room 203', 'Room 209', 'Room 208', 'Room 202'];
  const earlyMorning = [
    { 'workshop': 'Discovering Choices', 'leader': 'Ann	D', 'room': rooms[0] },
    { 'workshop': 'Happy Joyous & Free Isn\'t Free', 'leader': 'Ryan S', 'room': rooms[1] },
    { 'workshop': 'A Little Time for Myself', 'leader': 'Jessica M', 'room': rooms[2] },
    { 'workshop': 'Steps 11 & 12', 'leader': 'Anne	E', 'room': rooms[3] },
    { 'workshop': 'Writing Room', 'leader': 'Self Lead', 'room': rooms[4] },
    { 'workshop': 'Alateen Meeting (Closed)', 'leader': '', 'room': rooms[5] },
    { 'workshop': 'AMIAS Training', 'leader': 'Pamela Young', 'room': rooms[6] }]
    ;
  const lateMorning = [
    { 'workshop': 'Foregiveness', 'leader': 'Wayne P', 'room': rooms[0] },
    { 'workshop': 'Service Work', 'leader': 'Maria K', 'room': rooms[1] },
    { 'workshop': 'Sponsorship', 'leader': 'Jim Everitt', 'room': rooms[2] },
    { 'workshop': 'Meditation', 'leader': 'Don L', 'room': rooms[3] },
    { 'workshop': 'Writing Room', 'leader': 'Self Lead', 'room': rooms[4] },
    { 'workshop': 'Alateen Meeting (Closed)', 'leader': '', 'room': rooms[5] },
    { 'workshop': 'AMIAS Training', 'leader': 'Pamela Young', 'room': rooms[6] }
  ];
  const afterNoon = [
    { 'workshop': 'Steps 1, 2, 3', 'leader': 'Sue	D', 'room': rooms[0] },
    { 'workshop': 'Traditions and Concepts at Home', 'leader': 'King	C', 'room': rooms[1] },
    { 'workshop': 'Controlling our Emotional Nature', 'leader': 'Michael F', 'room': rooms[2] },
    { 'workshop': 'Changing my perspective', 'leader': 'Austin S', 'room': rooms[3] },
    { 'workshop': 'Writing Room', 'leader': 'Self Lead', 'room': rooms[4] },
    { 'workshop': 'Alateen Meeting (Closed)', 'leader': '', 'room': rooms[5] },
    { 'workshop': 'AMIAS Training', 'leader': 'Pamela Young', 'room': rooms[6] }
  ];

  const colSpan = earlyMorning.length;

  const RoomSchedule = () => {
    return (

      <div>
        <table className='roomTable' id="roomTable">
          <thead className="header">
            <tr role="row" className="highlighted">
              <th colSpan={colSpan}>Winter Roundup 2024 - Room Schedule<br /><span className='headerSmall'>(Workshops listed by room)</span></th>
            </tr>
          </thead>
          <thead className='desktop'>
            <tr>
              <th>Room</th>
              <th>9am</th>
              <th>10am</th>
              <th>1pm</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((item, index) => {
              return (
                <tr key={"room" + index}>
                  <td><strong>{item}</strong></td>
                  <td><strong>{earlyMorning[index].workshop}</strong><span className="mobile">(9am)</span><br />{earlyMorning[index].leader}</td>
                  <td><strong>{lateMorning[index].workshop}</strong><span className="mobile">(10am)</span><br />{lateMorning[index].leader}</td>
                  <td><strong>{afterNoon[index].workshop}</strong><span className="mobile">(1pm)</span><br />{afterNoon[index].leader}</td>
                </tr>)
            })}
          </tbody>
        </table>
      </div>
    )
  };

  return (
    <>
      {/* <div className='center'><a href='#roomTable' className='button'>View workshops by room</a> | <a href='#timeTable'>View workshops by time</a></div> */}
      <table role="table" className='timeTable' id="timeTable">
        <thead className="header">
          <tr role="row" className="highlighted">
            <th colSpan={colSpan}>Winter Roundup 2024 - Time Schedule<br /><span className='headerSmall'>(Workshops listed by time)</span></th>
            {/* <th className='desktop' role="columnheader"></th> */}
          </tr>
        </thead>
        <tbody>
          <tr role="row" className="desktop highlighted">
            <th role="columnheader">Time</th>
            {
              rooms.map((item, index) => {
                return (<th key={item + index} role="columnheader" className="center">{item}</th>)
              })
            }
          </tr>
          <tr role="row">
            <td role="cell">8:00 - 8:45</td>
            <td role="cell" colSpan={colSpan} className="center">Registration & Fellowship</td>
          </tr>
          <tr role="row">
            <td role="cell">8:45 - 9:00</td>
            <td role="cell" colSpan={colSpan} className="center">Welcome / Opening with Serenity Prayer – Banquet Room 1st
              Floor</td>
          </tr>

          <tr role="row" className='highlighted'>
            <td role="cell">9:00 - 9:50</td>
            {
              earlyMorning.map((item, index) => {
                return (
                  <td key={item.workshop + index} role="cell"><strong>{item.workshop}</strong>
                    <span className="mobile">({rooms[index]})</span>
                    <br />{item.leader}</td>)
              })
            }
          </tr>
          <tr role="row" className="break">
            <td role="cell">9:50 - 10:00</td>
            <td role="cell" colSpan={colSpan} className="center">10 minute break</td>
          </tr>
          <tr role="row" className='highlighted'>
            <td role="cell">10:00 - 10:50</td>
            {
              lateMorning.map((item, index) => {
                return (
                  <td key={item.workshop + index} role="cell"><strong>{item.workshop}</strong>
                    <span className="mobile">({rooms[index]})</span>
                    <br />{item.leader}</td>)
              })
            }
          </tr>
          <tr role="row">
            <td role="cell">10:50 - 11:00</td>
            <td role="cell" colSpan={colSpan} className="center">10 minute break</td>
          </tr>
          <tr role="row">
            <td role="cell">11:00 - 11:30</td>
            <td role="cell" colSpan={colSpan} className="center">Alateen Speakers</td>
          </tr>
          <tr role="row">
            <td role="cell">11:30 - 12:45</td>
            <td role="cell" colSpan={colSpan} className="center">Lunch (BYOL)</td>
          </tr>
          <tr role="row">
            <td role="cell">12:55 - 1:00</td>
            <td role="cell" colSpan={colSpan} className="center">Silent Auction and Raffle Closes</td>
          </tr>
          <tr role="row" className='highlighted'>
            <td role="cell">1:00 - 1:50</td>
            {
              afterNoon.map((item, index) => {
                return (
                  <td key={item.workshop + index} role="cell"><strong>{item.workshop}</strong>
                    <span className="mobile">({rooms[index]})</span>
                    <br />{item.leader}</td>)
              })
            }
          </tr>
          <tr role="row">
            <td role="cell">1:50 - 2:00</td>
            <td role="cell" colSpan={colSpan} className="center">10 minute break</td>
          </tr>
          <tr role="row">
            <td role="cell">2:00 - 2:25</td>
            <td role="cell" colSpan={colSpan} className="center">Announce Silent Auction and Raffle Winners</td>
          </tr>
          <tr role="row">
            <td role="cell">2:30 - 3:30</td>
            <td role="cell" colSpan={colSpan} className="center">Al-Anon Speaker</td>
          </tr>
          <tr role="row">
            <td role="cell">3:30 - 4:00</td>
            <td role="cell" colSpan={colSpan} className="center">Clean Up: All Rooms </td>
          </tr>
          <tr role="row">
              <td role="cell" colSpan={colSpan+1} className="center"><OtherDetails /></td>
            </tr>
        </tbody>
      </table>
      {/* {<RoomSchedule />} */}
    </>
  );
}

export default App;
