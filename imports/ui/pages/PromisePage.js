import React, {Component} from 'react';

export default class PromisePage extends Component {

  render() {
    return (
    <div id="page">
        <div id="frog" className="row">
          <div>
            <h2>
              Our Promise
            </h2>
            <p>
              Лорем ипсум долор сит амет, ностер феугиат рецтеяуе хас ин. Сцаевола постулант ин пер. Ат легере волутпат хис, ментитум мандамус хас ад. Меа алиа адмодум дефиниебас ет, постулант инцоррупте усу цу. Дуис праесент аццусамус нам ид, лаудем адмодум алияуандо сед те. Пер яуод вери цонцлудатуряуе ан, цум ех аугуе тибияуе продессет.<br />
              Вим те симул феугиат еффициантур, ат еирмод плацерат легендос сед, еа про новум пертинациа. Яуо сусципит ратионибус еи. Не усу малис петентиум. Аперири инцидеринт ин сед, тота елигенди инимицус нец ид.<br />
              Яуод пурто пауло ат про, меи хомеро еурипидис маиестатис ад, ин харум пхаедрум инвенире ест. Веритус легендос еам те, вис ин видит ессент дисцере, юсто нонумы облияуе те сит. Еам те иллум елаборарет диспутандо. Ассум долор вис ут. Меа сонет симул диссентиет ут.
            </p>
          </div>
          <div>
            <h2>
              Warranty
            </h2>
            <p>
              Лорем ипсум долор сит амет, цаусае аудиам ет еос. Идяуе аперири ад сеа, тантас аетерно еи еам, яуо ид ассум суавитате репрехендунт. Еи мовет адиписци рецусабо сед, либер орнатус номинави хас ех. Воцент пертинах усу ат, меи еа нибх тамяуам елигенди, меи фиерент бландит фастидии ех. Но сед видит солеат импетус.
            </p>
          </div>
        </div>
        <div className="container2">
          <div>
            <form method="get" action="http://www.google.com">
              <input
                type="text"
                className="tftextinput"
                placeholder="What will it be?"
                maxLength={200} />
              <input
                type="submit"
                defaultValue="search"
                className="tfbutton" />
            </form>
          </div>
          <div id="hing">
            <h3>
              Don't waste any more time, Buy tickets today.
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
