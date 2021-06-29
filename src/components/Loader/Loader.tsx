import LoaderSVG from './svg/loader.svg'

import styles from './Loader.module.less'

/**
 * Display loading screen
 * @returns JSX.Element
 */
const Loader = () => {
  return (
    <div className={styles.base}>
      <img src={LoaderSVG} alt="Loader" />
    </div>
  )
}

export default Loader
