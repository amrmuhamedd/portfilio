import React from 'react'
import classes from './freelancer.module.scss'
export default function freelancer() {
    return (
        <div>
        <div className={classes.freelancer  + ' text-center'}>
                    <h2>I Am Available For Freelancer.</h2>
                    <a href="https://www.upwork.com/o/profiles/users/~019bc157a9d1682de6/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success">upwork</a>
                    <a href="https://www.freelancer.com/u/Am1066903?w=f" className="btn btn-outline-primary">freelancer</a>
                    <a href="https://www.guru.com/freelancers/amr-mohamed-9" className="btn btn-outline-secondary">guru</a>

                </div>
        </div>
    )
}
