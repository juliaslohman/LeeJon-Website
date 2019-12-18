import React from 'react';

class Schedule extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
            <div className="schedule">
                <h3>Calendar + Schedule</h3>
                <section className="schedule-blocks">
                    <table>
                        <tr>
                            <td id="each-schedule-block">
                                <p id="class-name">Children</p>
                                <p id="class-times">Tuesday &amp; Thursday 5:15-6:00 PM, Friday 5:00-5:30 PM</p>
                            </td>
                            <td id="each-schedule-block">
                                <p id="class-name">Beginning Juniors</p>
                                <p id="class-times">Monday &amp; Wednesday 5:15-6:15 PM, Friday 5:30-6:00 PM</p>
                            </td>
                            <td id="each-schedule-block">
                                <p id="class-name">Intermediate Juniors 1</p>
                                <p id="class-times">Tuesday &amp; Thursday 6:00-7:00 PM, Friday 6:00-6:30 PM</p>
                            </td>
                            <td id="each-schedule-block">
                                <p id="class-name">Intermediate Juniors 2</p>
                                <p id="class-times">Tuesday &amp; Thursday 7:00-8:00 PM, Friday 6:30-7:00 PM</p>
                            </td>
                        </tr>
                        <tr>
                            <td id="each-schedule-block">
                                <p id="class-name">Advanced Juniors</p>
                                <p id="class-times">Monday &amp; Wednesday 6:15-7:15 PM, Friday 7:00-7:45 PM</p>
                            </td>
                            <td id="each-schedule-block">
                                <p id="class-name">Adults</p>
                                <p id="class-times">Monday &amp; Wednesday 7:15-8:15 PM, Friday 7:30-8:00 PM</p>
                            </td>
                            <td id="each-schedule-block">
                                <p id="class-name">PowerTeam</p>
                                <p id="class-times">Tuesday &amp; Thursday 8:00-9:00 PM, Saturday 12:00-2:00 PM</p>
                            </td>
                            <td id="each-schedule-block">
                                <p id="class-name">Poomsae Training</p>
                                <p id="class-times">Saturday 10:00-11:30 AM</p>
                            </td>
                        </tr>
                    </table>
                </section>
                <br/>
                <section className="calendar">
                    <iframe src="https://calendar.google.com/calendar/embed?height=750&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=3k7ci0b2k512otrn00k6irqgtc%40group.calendar.google.com&amp;color=%235229A3&amp;ctz=America%2FLos_Angeles" height="800" frameborder="0" scrolling="no"></iframe>
                </section>
            </div>
		);
	}
}

export default Schedule;