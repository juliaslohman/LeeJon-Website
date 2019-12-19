import React from 'react';
import testingForm from "../docs/testform.doc";

class ColorBeltTestingInfo extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
            <div class="color-belt-testing-info-content">

                <h3>Color Belt Testing Information</h3>

                <a href={testingForm} title="testing form" class="button">Download Testing Form</a>

                <p>
                    Colored-belt testing allows us to measure the student's progress towards their goals.
                    In addition to building on their self esteem and self-confidence, it is a way to develop a consistent work ethic and a winning attitude.
                    Students learn to set short-term goals (each colored belt), which systematically guides them en route to long-term goals (towards earning a black belt).
                    Testing allows students to showcase the physical curriculum of basic forms, self-defense, sparring, and board-breaking, and also display a unique mental toughness. 
                    Our testing days are a celebration of our students' accomplishments, allowing them to display their growth to both their instructors and their family.
                </p>
                <p>
                    These tests are typically administered every two months (except for red belts testing for their 4 stripes; their tests are usually administered every 4 months).
                    Testing is held at the LeeJon studio, unless a special occasion and or circumstance warrants a relocation.
                    Students must be able to demonstrate required techniques for their belt level (detalied below) to be are eligible to test.
                    They must also have attended enough class sessions.
                    All students who have earned recommendation from their Master or Head Instructor are eligible to test.
                    The student should also submit <a href="../docs/testform.doc" title="testing form">a testing form</a> to show the approval of their teachers and parents.
                </p>
                <p>
                    Don't forget to bring your stamp card to your test!
                </p>

                <br/>

                <table class="typical-table" width="750" cellspacing="0" cellpadding="5">
                    <tr>
                        <th>Current Rank</th>
                        <th>Gup</th>
                        <th>Requirements for Children</th>
                        <th>Requirements for Juniors and Adults</th>
                        <th>Comments</th>
                    </tr>
                    <tr class="cbtrow">
                        <th>White</th>
                        <td>16th gup</td>
                        <td>
                            <ul>
                                <li>Kibon 1</li>
                                <li>Basic Front, Swing, and Side Kick</li>
                                <li>Chun-gool-jaseh (Front Stance), Kee-mah-jaseh (Horse Stance), Dehrun-jaseh (Fighting Stance), Hoo-gool-jaseh (Cat Stance)</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Taeguk Il Jang</li>
                                <li>Basic Front, Swing, and Side Kick</li>
                                <li>Chun-gool-jaseh (Front Stance), Kee-mah-jaseh (Horse Stance), Dehrun-jaseh (Fighting Stance), Hoo-gool-jaseh (Cat Stance)</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Students must be able to demonstrate ability to tie belt</li>
                                <li>Students must meet training days requirement</li>
                                <li>Note: students will be evaluated on ability to demonstrate as much of 1st form as possible</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>White-Yellow</th>
                        <td>15th gup</td>
                        <td>
                            <ul>
                                <li>Kibon 1</li>
                                <li>Basic Side and Back Kick</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Taeguk Il Jang</li>
                                <li>Basic Side and Back Kick</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Students are encouraged to start to recite <a href="../studentcreed/studentcreed.html">Student Creed</a></li>
                                <li>Students must meet training days requirement</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Yellow</th>
                        <td>14th gup</td>
                        <td>
                            <ul>
                                <li>Kibon 2</li>
                                <li>Combination Basic Kicks (from fighting stance)</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Taeguk Y Jang</li>
                                <li>Combination Basic Kicks (from fighting stance)</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>All students are encouraged to purchase sparring equipment (all outside equipment must be approved prior to use)</li>
                                <li>Patches on uniforms are encouraged</li>
                                <li>Students must meet training days requirement</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Yellow-Orange</th>
                        <td>13th gup</td>
                        <td>
                            <ul>
                                <li>Kibon 3</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Taeguk Y Jang</li>
                                <li>Begin 4 Step Sparring</li>
                                <li><a href="../studentcreed/studentcreed.html">Student Creed</a></li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Should start becoming familiar with <a href="../docs/terminology.html">Korean Terminology</a></li>
                                <li>Students must meet training days requirement</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Orange</th>
                        <td>12th gup</td>
                        <td>
                            <ul>
                                <li>Taeguk Il Jang</li>
                                <li>First 2 steps of 4 Step Sparring</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Taeguk Sam Jang</li>
                                <li>4 Step Sparring</li>
                                <li><a href="../studentcreed/studentcreed.html">Student Creed</a></li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Students must own their own sparring equipment</li>
                                <li>Students must have patches on their uniform</li>
                                <li>Students must meet training days requirement</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Orange-Purple</th>
                        <td>11th gup</td>
                        <td>
                            <ul>
                                <li>Taeguk Il Jang</li>
                                <li>First 2 steps of 4 Step Sparring</li>
                                <li>Sliding Front and Swing Kick</li>
                                <li><a href="../studentcreed/studentcreed.html">Student Creed</a> 1-3</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Taeguk Sam Jang</li>
                                <li>Combination Basic Kicks</li>
                                <li>4 Step Sparring</li>
                                <li>Sliding Front and Swing Kick</li>
                                <li><a href="../studentcreed/studentcreed.html">Student Creed</a></li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Students must meet training days requirement</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Purple</th>
                        <td>10th gup</td>
                        <td>
                            <ul>
                                <li>Taeguk Y Jang</li>
                                <li>4 Step Sparring</li>
                                <li>Begin 3 Step Sparring</li>
                                <li>Sliding Side Kick</li>
                                <li><a href="../studentcreed/studentcreed.html">Student Creed</a></li>
                                <li>Begin hand techniques</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Taeguk Sa Jang</li>
                                <li>Combination Basic Kicks</li>
                                <li>4 Step Sparring</li>
                                <li>3 Step Sparring</li>
                                <li>Sliding Side and Back Kicks</li>
                                <li><a href="../studentcreed/studentcreed.html">Student Creed</a></li>
                                <li>Begin hand techniques</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Students should have participated in at least one tournament</li>
                                <li>Students must meet training days requirement</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Purple-Green</th>
                        <td>9th gup</td>
                        <td>
                            <ul>
                                <li>Taeguk Sam Jang</li>
                                <li>3 Step Sparring</li>
                                <li>Sliding Back Kick</li>
                                <li><a href="../studentcreed/studentcreed.html">Student Creed</a></li>
                                <li>Board break</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Choomo 1</li>
                                <li>Combination Sliding Kicks</li>
                                <li>4 Step Sparring</li>
                                <li>3 Step Sparring</li>
                                <li>1 Step Sparring</li>
                                <li><a href="../studentcreed/studentcreed.html">Student Creed</a></li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Students must meet training days requirement</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Green</th>
                        <td>8th gup</td>
                        <td>
                            <ul>
                                <li>Choomo 1</li>
                                <li>Combination Sliding Kicks</li>
                                <li>Jump Front Kick</li>
                                <li>3 Step Sparring</li>
                                <li>Punching combinations</li>
                                <li><a href="../studentcreed/studentcreed.html">Student Creed</a></li>
                                <li>Count from 1-10 in Korean</li>
                                <li>Board break</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Taeguk Oh Jang</li>
                                <li>Jump Front and Swing Kicks</li>
                                <li>Punching combinations</li>
                                <li><a href="../studentcreed/studentcreed.html">Student Creed</a></li>
                                <li>Count from 1-10 in Korean</li>
                                <li>Board break</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>This is the halfway point to black belt.</li>
                                <li>Students should have participated in at least two tournaments</li>
                                <li>Students must meet training days requirement</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Green-Blue</th>
                        <td>7th gup</td>
                        <td>
                            <ul>
                                <li>Taeguk Oh Jang</li>
                                <li>Jump Swing and Side Kicks</li>
                                <li>1 Step Sparring</li>
                                <li>Backfist</li>
                                <li><a href="../studentcreed/studentcreed.html">Student Creed</a></li>
                                <li>Board break</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Taeguk Oh Jang</li>
                                <li>Jump Side and Back Kicks</li>
                                <li>Backfist</li>
                                <li><a href="../studentcreed/studentcreed.html">Student Creed</a></li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Students must meet training days requirement</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Blue</th>
                        <td>6th gup</td>
                        <td>
                            <ul>
                                <li>Taeguk Oh Jang</li>
                                <li>Jump Side and Back Kicks</li>
                                <li>Palm Strike</li>
                                <li><a href="../studentcreed/studentcreed.html">Student Creed</a></li>
                                <li>Board break</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Choomo 2</li>
                                <li>Pop Front and Swing Kicks</li>
                                <li>Palm Strike</li>
                                <li><a href="../studentcreed/studentcreed.html">Student Creed</a></li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Students must meet training days requirement</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Blue-Brown</th>
                        <td>5th gup</td>
                        <td>
                            <ul>
                                <li>Choomo 2</li>
                                <li>Pop Front and Swing Kicks</li>
                                <li>1 Step Sparring</li>
                                <li>Spinning backfist</li>
                                <li><a href="../studentcreed/studentcreed.html">Student Creed</a></li>
                                <li>Board break</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Taeguk Yuk Jang</li>
                                <li>Pop Side and Back Kicks</li>
                                <li>Spinning backfist</li>
                                <li><a href="../studentcreed/studentcreed.html">Student Creed</a></li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Students should have participated in at least three tournaments</li>
                                <li>Students must meet training days requirement</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Brown</th>
                        <td>4th gup</td>
                        <td>
                            <ul>
                                <li>Taeguk Yuk Jang</li>
                                <li>Pop Side and Back Kicks</li>
                                <li>Ridgehand</li>
                                <li><a href="../studentcreed/studentcreed.html">Student Creed</a></li>
                                <li>Board break</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Taeguk Chil Jang</li>
                                <li>Pop Combinations</li>
                                <li>Ridgehand</li>
                                <li><a href="../studentcreed/studentcreed.html">Student Creed</a></li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Students must meet training days requirement</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Brown-Red</th>
                        <td>3rd gup</td>
                        <td>
                            <ul>
                                <li>Taeguk Chil Jang</li>
                                <li>Pop Combination Kicks</li>
                                <li>Jump Double Punch</li>
                                <li><a href="../studentcreed/studentcreed.html">Student Creed</a></li>
                                <li>Board break</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Taeguk Chil Jang</li>
                                <li>Advanced Combination Kicks</li>
                                <li>Crescent Kick</li>
                                <li>Hook Kick</li>
                                <li>Jump Double Punch</li>
                                <li><a href="../studentcreed/studentcreed.html">Student Creed</a></li>
                                <li>Board break</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Students must meet training days requirement</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Red</th>
                        <td>2nd gup</td>
                        <td colspan="2">
                            <ul>
                                <li>Taeguk Chil Jang</li>
                                <li>Taeguk Pal Jang</li>
                                <li>Choomo 3</li>
                                <li>Advanced Combination Kicks</li>
                                <li>Crescent Kick</li>
                                <li>Hook Kick</li>
                                <li>Spearhand</li>
                                <li><a href="../studentcreed/studentcreed.html">Student Creed</a></li>
                                <li>Board break</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Begin red belt qualification codes</li>
                                <li>Begin advanced step sparring</li>
                                <li>Attend red belt training</li>
                                <li>Students should have participated in at least four tournaments</li>
                                <li>Proficiency in <a href="../docs/terminology.html">Korean Terminology</a></li>
                                <li>Students must meet training days requirement</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Red, one stripe</th>
                        <td>1st gup A</td>
                        <td colspan="2">
                            <ul>
                                <li>Taeguk Pal Jang</li>
                                <li>Choomo 3</li>
                                <li>All step sparring</li>
                                <li>Advanced Combination Kicks</li>
                                <li>Reverse Crescent Kick</li>
                                <li>Reverse Hook Kick</li>
                                <li>Elbow and Knee strikes</li>
                                <li><a href="../studentcreed/studentcreed.html">Student Creed</a></li>
                                <li>Board break</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Begin to demonstrate advanced step sparring</li>
                                <li>Students must meet training days and red belt training requirement</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Red, two stripes</th>
                        <td>1st gup B</td>
                        <td colspan="2">
                            <ul>
                                <li>All forms</li>
                                <li>All step sparring</li>
                                <li>Advanced step sparring</li>
                                <li>Advanced Combination Kicks</li>
                                <li>Step-over Butterfly Kick</li>
                                <li>Advanced hand techniques</li>
                                <li><a href="../studentcreed/studentcreed.html">Student Creed</a></li>
                                <li>Board break</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Students must meet training days and red belt training requirement</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Red, three stripes</th>
                        <td>1st gup C</td>
                        <td colspan="2">
                            <ul>
                                <li>All forms</li>
                                <li>All step sparring</li>
                                <li>Advanced step sparring</li>
                                <li>Advanced Combination Kicks</li>
                                <li>Advanced hand techniques</li>
                                <li><a href="../studentcreed/studentcreed.html">Student Creed</a></li>
                                <li>Board break</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Students must meet training days and red belt training requirement</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Red, four stripes</th>
                        <td>1st gup D</td>
                        <td colspan="2">
                            <ul>
                                <li>All forms</li>
                                <li>All step sparring</li>
                                <li>Advanced step sparring</li>
                                <li>Advanced Combination Kicks</li>
                                <li>Advanced hand techniques</li>
                                <li><a href="../studentcreed/studentcreed.html">Student Creed</a></li>
                                <li>Board break</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Students must meet training days and red belt training requirement</li>
                            </ul>
                        </td>
                    </tr>
                </table>

            </div>
		);
	}
}

export default ColorBeltTestingInfo;