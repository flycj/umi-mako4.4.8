import yayJpg from '../assets/yay.jpg';
import styless from './index.module.scss'
import stylels from './index.module.less'


export default function HomePage() {
  return (
    <div className={styless.homePage}>
      <h2>Yay! Welcome to umi!</h2>
      <p className={stylels.welcome}>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
