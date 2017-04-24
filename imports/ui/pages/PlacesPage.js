import React, {
  Component
} from 'react';
import PlacesItem from '../components/PlacesItem';

export default class PlacesPage extends Component {

  render() {

    const places = [{
      key: 'italy',
      title: 'Italy',
      description: 'Lorem Ipsum carote, una maggiore sviluppatore di laurea, ma lo fanno tempo occaecat e vitalità, come il lavoro e l\'obesità. Nel corso degli anni sono, che nostrud esercizio, il lavoro distretto scolastico a meno che non aliquip vantaggio da esso. Compiti a casa se cupidatat consumatore di trovare piacere vuole essere un cillum calcio che rifugge il dolore, non produce risultante. Excepteur cupidatat neri non sono excepteur, è calmante per l\'anima, cioè, essi abbandonarono i doveri generali di coloro che sono da biasimare per i vostri problemi.',
      price: 2700.59,
    }, {
      key: 'greece',
      title: 'Greece',
      description: 'Lorem ipsum καρότα, ενισχυμένη προπτυχιακό έργου, αλλά το κάνουν occaecat χρόνο και ζωντάνια, όπως η εργασία και η παχυσαρκία. Με τα χρόνια έρχονται, ο οποίος nostrud άσκηση, το έργο σχολική περιφέρεια, εκτός αν aliquip όφελος από αυτό. Κατ \'οίκον εργασία, αν cupidatat καταναλωτές να βρίσκουν ευχαρίστηση θέλει να είναι το ποδόσφαιρο cillum ο ίδιος αποφεύγει τον πόνο, δεν παράγει προκύπτει. Excepteur cupidatat οι μαύροι δεν είναι excepteur, είναι καταπραϋντικό για την ψυχή, δηλαδή, εγκατέλειψαν τα γενικά καθήκοντα των ατόμων που ευθύνονται για τα προβλήματά σας.',
      price: 2543.44,
    }, {
      key: 'norway',
      title: 'Norway',
      description: 'Lorem ipsum gulrøtter, forbedret lavere utvikleren, men de gjør occaecat tid og energi, for eksempel arbeidskraft og fedme. Gjennom årene framover, som nostrud trening, skolekrets arbeidet med mindre de aliquip nytte av det. Lekser hvis cupidatat forbrukeren å finne glede ønsker å være en fotball cillum han skyr smerte, produserer ingen resulterende. excepteur cupidatat svarte er ikke excepteur, er beroligende for sjelen, det vil si de øde de generelle pliktene til de som har skylden for dine problemer.',
      price: 2609.75,
    }, {
      key: 'australia',
      title: 'Australia',
      description: 'Lorem ipsum carrots, enhanced undergraduate developer, but they do occaecat time and vitality, such as labor and obesity. Over the years come, who nostrud exercise, the school district work unless they aliquip advantage from it. Homework if cupidatat consumer to find pleasure wants to be a football cillum he shuns pain, produces no resultant. Excepteur cupidatat blacks are not excepteur, is soothing to the soul, that is, they deserted the general duties of those who are to blame for your troubles.',
      price: 3023.21,
    }, {
      key: 'uae',
      title: 'UAE',
      description: 'أبجد هوز الجزر، وتعزيز التطوير الجامعي، لكنها المرة occaecat والحيوية، مثل العمل والبدانة على مدى السنوات تأتي، الذين nostrud ممارسة، وعمل مدرسة حي ما لم aliquip الاستفادة منه. واجب منزلي إذا cupidatat المستهلك أن يجد المتعة يريد أن يكون cillum كرة القدم انه يتجنب الألم، لا ينتج الناتجة. excepteur cupidatat السود ليست excepteur، هو مهدئا للروح، وهذا يعني أنها مهجورة والواجبات العامة من أولئك الذين هم المسؤول عن مشاكلك.',
      price: 2841.99,
    }, {
      key: 'monaco',
      title: 'Monaco',
      description: 'Zanahorias Lorem Ipsum, mayor desarrollador de grado, pero lo hacen de vez occaecat y vitalidad, como el trabajo y la obesidad. A través de los años por venir, que nostrud ejercicio, el trabajo del distrito escolar a menos que aliquip ventaja de ella. La tarea si cupidatat del consumidor para encontrar placer quiere ser un cillum de fútbol que evita el dolor, no produce resultante. excepteur cupidatat los negros no son excepteur, es calmante para el alma, es decir, que abandonaron los deberes generales de los que tienen la culpa de sus problemas.',
      price: 3491.22,
    }]

    return (

      <div id="page">
        <div className="lkj">
          <h1>Places We Go</h1>
        </div>
        <div className="row" id="main">
          {places.map(function(place) {
            return (
              <PlacesItem place={place} key={place.key}/>
            );
          })}




        </div>
        <div className="container3">
          <div>
            <form method="get" action="http://www.google.com">
              <input type="text" className="tftextinput" placeholder="What will it be?" maxLength="200" />
              <input type="submit" value="search" className="tfbutton" />
            </form>
          </div>
        </div>

        <div id="hing">
          <h3>Dont waste any more time, Buy tickets today.</h3>
        </div>
      </div>
    );
  }
}
