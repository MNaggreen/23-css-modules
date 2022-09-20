import './Info.css'
/* Так как мы привязали Info.css к файлу 
Info.js наш файл со с
тилями привязался глобально и теперь мы 
можем использовать их везде */

import styles from './info.module.css'
/* всегда рекомедуется располагать файлы 
со стилями рядом с компонентами */

console.log(styles)
/* консоль выдаст объект вкотором
будет два элемента 
"info": Info_info__s8vxq
"myOtheButton": Info_myOtherButton__8e85U 
символы это уникальные названия классов
такое эе название будет у классов которые указаны для div*/

function Info() {
  return (
    <div className={styles.info}>
        {/* Обращение к файлу со стилями и сразу к классу
        который содержит в себе эти стили  */}
      <h1>Hello from the Info component</h1>
      <h2>Heading in the Info component</h2>
      {/* в файле Info.modules.css содержаться стили для нашего h2
      и они применятся нормально */} 
      <button className="my-button">Click me in the info component</button>
      <button className={styles.myOtherButton}>Button with local css styles</button>
    {/* Обращение к файлу со стилями и сразу к классу
        который содержит в себе эти стили  */}
    </div>
  )
}

export default Info
