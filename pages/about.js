import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/About.module.css';

const AboutUs = () => {
  return (
    <Layout page='About'>
      <main className='container'>
        <h2 className='heading'> About Us</h2>
        <div className={styles.content}>
          <Image
            layout='responsive'
            width={600}
            height={450}
            src='/img/nosotros.jpg'
            alt='about us'
          ></Image>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vitae lacus quam. Cras porta elit et felis gravida cursus. Donec
              eu augue neque. Nulla nisl justo, iaculis a nibh sed, mattis
              mattis risus. Donec sagittis suscipit dui. Suspendisse tristique
              augue in velit fermentum viverra. Mauris dapibus iaculis leo, et
              vehicula arcu tempor vel. Sed sit amet est lacinia, viverra est
              ultrices, feugiat metus. Mauris sollicitudin tellus nisl, nec
              feugiat nisi mattis vel.
            </p>

            <p>
              Quisque placerat odio vitae libero mattis, a cursus quam
              fermentum. Sed in ante justo. Phasellus vitae velit lacus. Nam
              vulputate orci nisl, id congue nisi auctor non. Vestibulum
              vestibulum sodales ultricies. Aliquam ultricies nisi ut
              pellentesque ultrices. Nunc accumsan lectus vel eros imperdiet
              cursus. Fusce nec tortor et arcu blandit feugiat vel ut nunc. Duis
              lacinia nisl vel felis ultricies, quis congue velit lacinia. In
              facilisis facilisis sapien quis viverra. Donec faucibus elit sit
              amet sapien pellentesque pulvinar. Mauris commodo leo nec odio
              posuere egestas.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AboutUs;
