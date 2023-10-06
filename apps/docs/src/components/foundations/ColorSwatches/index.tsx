import React from 'react';
import styles from './styles.module.scss';
import SampleColor from '../../SampleColor/SampleColor';

const tones = new Array(11).fill('00').map((v, i) => `${i}0`);

export const Palette = ({ title, colors, values }) => {
  return (
    <section className={styles.container}>
      <div className={styles.body}>
        <SampleColor background={colors[5]} type="rectangle">
          <div className={styles.boxContainer}>
            <span>50</span>
            <span>{title}</span>
          </div>
        </SampleColor>
        {colors.map((color, i) => {
          return (
            <SampleColor background={color} type="rectangle">
              <div
                className={`${styles.boxContainer} ${
                  i > 5 ? styles.lightText : ''
                } `}
              >
                <span>{tones[i]}</span>
                <span>{color.toUpperCase().substring(1)}</span>
              </div>
              <div className={styles.rightText}>
                <span>{values[i].val}</span>
                <span>{values[i].sage}</span>
              </div>
            </SampleColor>
          );
        })}
      </div>
    </section>
  );
};

export default function ColorSwatches(): JSX.Element {
  return (
    <section className={styles.colorSwatches}>
      <Palette
        title="SST"
        colors={[
          '#fff2ec',
          '#ffdaca',
          '#ffba9c',
          '#ff9162',
          '#ff601b',
          '#df4907',
          '#bb3d06',
          '#9a3205',
          '#7c2904',
          '#5f1f03',
          '#361102',
        ]}
        values={[
          {
            val: '19.16',
            sage: 'AAA',
          },
          {
            val: '16.13',
            sage: 'AAA',
          },
          {
            val: '12.75',
            sage: 'AAA',
          },

          {
            val: '9.48',
            sage: 'AAA',
          },
          {
            val: '6.94',
            sage: 'AA',
          },
          {
            val: '4.5',
            sage: 'AA',
          },
          {
            val: '5.55',
            sage: 'AA',
          },
          {
            val: '7.4',
            sage: 'AAA',
          },
          {
            val: '9.7',
            sage: 'AAA',
          },
          {
            val: '12.4',
            sage: 'AAA',
          },

          {
            val: '16.99',
            sage: 'AAA',
          },
        ]}
      />
      <Palette
        title="TERRACOTTA"
        colors={[
          '#faf3f2',
          '#f0dedb',
          '#e3c2bd',
          '#d3a39b',
          '#c3857c',
          '#A66359',
          '#a05245',
          '#8f3b2f',
          '#7c271a',
          '#611d13',
          '#36100a',
        ]}
        values={[
          {
            val: '19.16',
            sage: 'AAA',
          },
          {
            val: '16.17',
            sage: 'AAA',
          },
          {
            val: '12.71',
            sage: 'AAA',
          },

          {
            val: '9.48',
            sage: 'AAA',
          },
          {
            val: '6.96',
            sage: 'AA',
          },
          {
            val: '5.09',
            sage: 'AA',
          },
          {
            val: '5.54',
            sage: 'AA',
          },
          {
            val: '7.4',
            sage: 'AAA',
          },
          {
            val: '9.7',
            sage: 'AAA',
          },
          {
            val: '12.4',
            sage: 'AAA',
          },

          {
            val: '16.99',
            sage: 'AAA',
          },
        ]}
      />
      <Palette
        title="PUMPKIN"
        colors={[
          '#fcf3e9',
          '#f7dec1',
          '#f0c18c',
          '#e89f4d',
          '#D38225',
          '#A8671D',
          '#945b1a',
          '#7a4b16',
          '#623c11',
          '#4a2e0d',
          '#291907',
        ]}
        values={[
          {
            val: '19.1',
            sage: 'AAA',
          },
          {
            val: '16.17',
            sage: 'AAA',
          },
          {
            val: '12.7',
            sage: 'AAA',
          },

          {
            val: '9.49',
            sage: 'AAA',
          },
          {
            val: '6.98',
            sage: 'AAA',
          },
          {
            val: '5.1',
            sage: 'AA',
          },
          {
            val: '5.56',
            sage: 'AA',
          },
          {
            val: '7.37',
            sage: 'AAA',
          },
          {
            val: '9.66',
            sage: 'AAA',
          },
          {
            val: '12.4',
            sage: 'AAA',
          },

          {
            val: '16.9',
            sage: 'AAA',
          },
        ]}
      />
      <Palette
        title="WALNUT"
        colors={[
          '#fbf3eb',
          '#f3dec9',
          '#f0c18c',
          '#c7a98c',
          '#a99077',
          '#87725F',
          '#766553',
          '#615344',
          '#4e4337',
          '#3b322a',
          '#201c17',
        ]}
        values={[
          {
            val: '19.1',
            sage: 'AAA',
          },
          {
            val: '16.17',
            sage: 'AAA',
          },
          {
            val: '12.7',
            sage: 'AAA',
          },

          {
            val: '9.49',
            sage: 'AAA',
          },
          {
            val: '6.98',
            sage: 'AAA',
          },
          {
            val: '5.1',
            sage: 'AA',
          },
          {
            val: '5.56',
            sage: 'AA',
          },
          {
            val: '7.37',
            sage: 'AAA',
          },
          {
            val: '9.66',
            sage: 'AAA',
          },
          {
            val: '12.4',
            sage: 'AAA',
          },

          {
            val: '16.9',
            sage: 'AAA',
          },
        ]}
      />
      <Palette
        title="HAZEL"
        colors={[
          '#fbf4dc',
          '#f4e1a8',
          '#d9c995',
          '#bcae81',
          '#a0946e',
          '#807658',
          '#70684d',
          '#5d553f',
          '#4a4433',
          '#383426',
          '#1f1c15',
        ]}
        values={[
          {
            val: '19',
            sage: 'AAA',
          },
          {
            val: '16.18',
            sage: 'AAA',
          },
          {
            val: '12.7',
            sage: 'AAA',
          },

          {
            val: '9.5',
            sage: 'AAA',
          },
          {
            val: '6.95',
            sage: 'AA',
          },
          {
            val: '5.12',
            sage: 'AA',
          },
          {
            val: '5.56',
            sage: 'AA',
          },
          {
            val: '7.4',
            sage: 'AAA',
          },
          {
            val: '9.69',
            sage: 'AAA',
          },
          {
            val: '12.4',
            sage: 'AAA',
          },

          {
            val: '17',
            sage: 'AAA',
          },
        ]}
      />
      <Palette
        title="SAGE"
        colors={[
          '#f0f5f0',
          '#d7e5d9',
          '#b8d0bb',
          '#97b79b',
          '#799e7e',
          '#607D64',
          '#556f58',
          '#455b48',
          '#38493a',
          '#2b382c',
          '#171E18',
        ]}
        values={[
          {
            val: '19',
            sage: 'AAA',
          },
          {
            val: '16.12',
            sage: 'AAA',
          },
          {
            val: '12.8',
            sage: 'AAA',
          },

          {
            val: '9.56',
            sage: 'AAA',
          },
          {
            val: '7',
            sage: 'AA',
          },
          {
            val: '5.12',
            sage: 'AA',
          },
          {
            val: '5.52',
            sage: 'AA',
          },
          {
            val: '7.38',
            sage: 'AAA',
          },
          {
            val: '9.62',
            sage: 'AAA',
          },
          {
            val: '12.3',
            sage: 'AAA',
          },

          {
            val: '16.9',
            sage: 'AAA',
          },
        ]}
      />
      <Palette
        title="MAUVE"
        colors={[
          '#f6f3f6',
          '#e7dfe8',
          '#D2C6D4',
          '#baa9bd',
          '#a28ea6',
          '#847087',
          '#77617a',
          '#634f67',
          '#513e54',
          '#3f2f42',
          '#231a24',
        ]}
        values={[
          {
            val: '19',
            sage: 'AAA',
          },
          {
            val: '12.76',
            sage: 'AAA',
          },
          {
            val: '9.49',
            sage: 'AAA',
          },

          {
            val: '6.95',
            sage: 'AAA',
          },
          {
            val: '5.1',
            sage: 'AA',
          },
          {
            val: '5.56',
            sage: 'AA',
          },
          {
            val: '7.38',
            sage: 'AA',
          },
          {
            val: '6.69',
            sage: 'AAA',
          },
          {
            val: '12.3',
            sage: 'AAA',
          },
          {
            val: '12.3',
            sage: 'AAA',
          },

          {
            val: '16.87',
            sage: 'AAA',
          },
        ]}
      />
      <Palette
        title="STEEL"
        colors={[
          '#edf5fa',
          '#D2E2EE',
          '#B4C9D8',
          '#95adbf',
          '#7e92a1',
          '#657682',
          '#56656f',
          '#46515a',
          '#374046',
          '#282e33',
          '#121618',
        ]}
        values={[
          {
            val: '00',
            sage: 'AAA',
          },
          {
            val: '00',
            sage: 'AAA',
          },
          {
            val: '00',
            sage: 'AAA',
          },

          {
            val: '00',
            sage: 'AAA',
          },
          {
            val: '4.7',
            sage: 'AA',
          },
          {
            val: '4.5',
            sage: 'AA',
          },
          {
            val: '00',
            sage: 'AA',
          },
          {
            val: '00',
            sage: 'AAA',
          },
          {
            val: '00',
            sage: 'AAA',
          },
          {
            val: '00',
            sage: 'AAA',
          },

          {
            val: '00',
            sage: 'AAA',
          },
        ]}
      />
      <Palette
        title="GREY"
        colors={[
          '#f4f4f4',
          '#e2e2e2',
          '#cacaca',
          '#aeaeae',
          '#959595',
          '#757575',
          '#686868',
          '#565656',
          '#444444',
          '#343434',
          '#1d1d1d',
        ]}
        values={[
          {
            val: '19',
            sage: 'AAA',
          },
          {
            val: '16.2',
            sage: 'AAA',
          },
          {
            val: '12.8',
            sage: 'AAA',
          },

          {
            val: '9.46',
            sage: 'AAA',
          },
          {
            val: '7.1',
            sage: 'AA',
          },
          {
            val: '5.17',
            sage: 'AA',
          },
          {
            val: '5.57',
            sage: 'AA',
          },
          {
            val: '7.3',
            sage: 'AAA',
          },
          {
            val: '9.73',
            sage: 'AAA',
          },
          {
            val: '12.4',
            sage: 'AAA',
          },

          {
            val: '16.8',
            sage: 'AAA',
          },
        ]}
      />
    </section>
  );
}
