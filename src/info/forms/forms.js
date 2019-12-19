import React from 'react';
import taeguk1 from "./taeguk/taeguk1.mp4";
import taeguk2 from "./taeguk/taeguk2.mp4";
import taeguk3 from "./taeguk/taeguk3.mp4";
import taeguk4 from "./taeguk/taeguk4.mp4";
import taeguk5 from "./taeguk/taeguk5.mp4";
import taeguk6 from "./taeguk/taeguk6.mp4";
import taeguk7 from "./taeguk/taeguk7.mp4";
import taeguk8 from "./taeguk/taeguk8.mp4";
import palgwe1 from "./palgwe/palgwe1.mp4";
import palgwe2 from "./palgwe/palgwe2.mp4";
import palgwe3 from "./palgwe/palgwe3.mp4";
import palgwe4 from "./palgwe/palgwe4.mp4";
import palgwe5 from "./palgwe/palgwe5.mp4";
import palgwe6 from "./palgwe/palgwe6.mp4";
import palgwe7 from "./palgwe/palgwe7.mp4";
import palgwe8 from "./palgwe/palgwe8.mp4";
import choomo1 from "./choomo/choomo1.mp4";
import choomo2 from "./choomo/choomo2.mp4";
import choomo3 from "./choomo/choomo3.mp4";
import koryo from "./bb/koryo.mp4";
import keumgang from "./bb/keumgang.mp4";
import taebaek from "./bb/taebaek.mpeg";
import pyongwon from "./bb/pyongwon.mpeg";
import sipjin from "./bb/sipjin.mpeg";
import jitae from "./bb/jitae.mpeg";
import chonkwon from "./bb/chonkwon.mpeg";
import hansu from "./bb/hansu.mpeg";
import ilyeo from "./bb/ilyeo.mpeg";

class Forms extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
            <div className="forms-content">
                <h3>Forms Videos</h3>

                <h4>Taeguk</h4>
                    <a href={taeguk1} class="button">Taeguk Il Jang</a>
                    <a href={taeguk2} class="button">Taeguk Y Jang</a>
                    <a href={taeguk3} class="button">Taeguk Sam Jang</a>
                    <a href={taeguk4} class="button">Taeguk Sa Jang</a>
                    <a href={taeguk5} class="button">Taeguk Oh Jang</a>
                    <a href={taeguk6} class="button">Taeguk Yuk Jang</a>
                    <a href={taeguk7} class="button">Taeguk Chil Jang</a>
                    <a href={taeguk8} class="button">Taeguk Pal Jang</a>

                <h4>Palgwe</h4>
                    <a href={palgwe1} class="button">Palgwe Il Jang</a>
                    <a href={palgwe2} class="button">Palgwe Y Jang</a>
                    <a href={palgwe3} class="button">Palgwe Sam Jang</a>
                    <a href={palgwe4} class="button">Palgwe Sa Jang</a>
                    <a href={palgwe5} class="button">Palgwe Oh Jang</a>
                    <a href={palgwe6} class="button">Palgwe Yuk Jang</a>
                    <a href={palgwe7} class="button">Palgwe Chil Jang</a>
                    <a href={palgwe8} class="button">Palgwe Pal Jang</a>

                <h4>Choomo</h4>
                    <a href={choomo1} class="button">Choomo 1</a>
                    <a href={choomo2} class="button">Choomo 2</a>
                    <a href={choomo3} class="button">Choomo 3</a>

                <h4>Black Belt Forms</h4>
                    <a href={koryo} class="button">Koryo</a>
                    <a href={keumgang} class="button">Keumgang</a>
                    <a href={taebaek} class="button">Taebaek</a>
                    <a href={pyongwon} class="button">Pyongwon</a>
                    <a href={sipjin} class="button">Sipjin</a>
                    <a href={jitae} class="button">Jitae</a>
                    <a href={chonkwon} class="button">Chonkwon</a>
                    <a href={hansu} class="button">Hansu</a>
                    <a href={ilyeo} class="button">Ilyeo</a>
            </div>
		);
	}
}

export default Forms;