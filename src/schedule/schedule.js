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
                    <table className="typical-table centered-table">
                        <tr>
                            <th>Children</th>
                            <th>Beginning Juniors</th>
                            <th>Intermediate Juniors 1</th>
                            <th>Intermediate Juniors 2</th>
                            <th>Advanced Juniors</th>
                            <th>Adults</th>
                            <th>PowerTeam</th>
                            <th>Poomsae Training</th>
                        </tr>
                        <tr>
                            <td>Tuesday &amp; Thursday 5:15-6:00 PM <br/> Friday 5:00-5:30 PM</td>
                            <td>Monday &amp; Wednesday 5:15-6:15 PM <br/> Friday 5:30-6:00 PM</td>
                            <td>Tuesday &amp; Thursday 6:00-7:00 PM <br/> Friday 6:00-6:30 PM</td>
                            <td>Tuesday &amp; Thursday 7:00-8:00 PM <br/> Friday 6:30-7:00 PM</td>
                            <td>Monday &amp; Wednesday 6:15-7:15 PM <br/> Friday 7:00-7:45 PM</td>
                            <td>Monday &amp; Wednesday 7:15-8:15 PM <br/> Friday 7:30-8:00 PM</td>
                            <td>Tuesday &amp; Thursday 8:00-9:00 PM <br/> Saturday 12:00-2:00 PM</td>
                            <td>Saturday 10:00-11:30 AM</td>
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