import React from 'react'
import styles from "./Schedule.module.scss"

function Schedule() {
  return (
    <div className={styles.training_schedule}>
        <h3 className={styles.time_table}>- TIME TABLE</h3>
        <h2 className={styles.training_name}>PROFESSIONAL WEEKLY SCHEDULE</h2>
        <table>
      <thead>
        <tr>
          <th></th>
          <th>MONDAY</th>
          <th>TUESDAY</th>
          <th>WEDNISDAY</th>
          <th>THURSDAY</th>
          <th>FRIDAY</th>
          <th>SATURDAY</th>
          <th>SUNDAY</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>8:00am</td>
          <td><h4>CROSSFIT</h4></td>
          <td></td>
          <td><h4>CROSSFIT</h4></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
        <td>10:00am</td>
          <td></td>
          <td><h4>CROSSFIT</h4></td>
          <td></td>
          <td><h4>CROSSFIT</h4></td>
          <td></td>
          <td></td>
          <td><h4>CROSSFIT</h4></td>

        </tr>
        <tr>
        <td>2:00pm</td>
          <td></td>
          <td></td>
          <td><h4>CROSSFIT</h4></td>
          <td></td>
          <td></td>
          <td><h4>CROSSFIT</h4></td>
          <td></td>
        </tr>
        <tr>
          <td>4:00pm</td>
          <td><h4>CROSSFIT</h4></td>
          <td></td>
          <td></td>
          <td><h4>CROSSFIT</h4></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>6:00pm</td>
          <td><h4>CROSSFIT</h4></td>
          <td></td>
          <td><h4>CROSSFIT</h4></td>
          <td></td>
          <td><h4>CROSSFIT</h4></td>
          <td></td>
          <td></td>
        </tr>
        
      </tbody>
    </table>
    </div>
  )
}

export default Schedule