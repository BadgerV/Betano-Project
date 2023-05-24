import React from 'react'
import './roles.css'

const Roles = () => {
  return (
    <div className="roles">
        <div className="roles-upper">
            <span className="roles-upper_header">Weekely Remarks</span>
            <ul>
                <li>Fantastic job this week! Your consistent commitment and exceptional work have been outstanding. Keep up the excellent performance!</li>
                <li>Let's focus on improving your time management skills to ensure timely completion of tasks. Organizing your workload efficiently will lead to increased productivity.</li>
            </ul>
        </div>
        <div className="roles-upper">
        <span className="roles-upper_header">Equipments on Release</span>
            <ul>
                <li>Masonry Trowel</li>
                <li>Brick Hammer</li>
                <li>Brick Hammer</li>
                <li>Brick Jointer</li>
                <li>Masonry Saw</li>
            </ul>
        </div>
    </div>
  )
}

export default Roles