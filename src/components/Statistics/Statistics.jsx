import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

  function randomColor() {
    return `rgb(
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)})
    `;
  }

function Statistics({ title, stats }) {
  return (
    <>
      <section className={styles.statistics}>
        <h2 className={styles.title}>{title}</h2>

        <ul className={styles.statList}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li
                className={styles.item}
                key={id}
                style={{ backgroundColor: randomColor() }}
              >
                <span className={styles.label}>{label}</span>
                <span className={styles.percentage}>{percentage} %</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default Statistics;
