import { useAuth } from "@/context/AuthContext";
import { getDaysUntilNextCharge, subscriptions } from "@/utils";

export default function SubscriptionsDisplay(props) {
    const { handleShowInput, handleEditSubscription } = props
    const { handleDeleteSubscription, userData } = useAuth()
    console.log(userData)

    if (!userData?.subscriptions) { return null }


    return (
        <section>
            <h2>Your Subscriptions</h2>
            <div className="card-container">

                {userData.subscriptions.map((sub, subIndex) => {
                    const { name, category, cost, currency, billingFrequency, startDate, notes, status } = sub

                    return (
                        <div key={subIndex} className="card subscription-card">
                            <div>
                                <h3>{name}</h3>
                                <div className={'status ' + (status === 'Active' ? ' card-button-primary' : ' card-button-secondary')}>
                                    <small>{status}</small>
                                </div>
                            </div>

                            <p><i>{category}</i></p>

                            <div className="sub-cost">
                                <h2>${cost}</h2>
                                <p>{currency}</p>
                            </div>
                            <small>per {billingFrequency}</small>

                            <div className="sub-renewal">
                                <div>
                                    <p>Started</p>
                                    <h4>{startDate}</h4>
                                </div>
                                <div>
                                    <p>Due</p>
                                    <h4>{getDaysUntilNextCharge(startDate, billingFrequency)}</h4>
                                </div>
                            </div>

                            <div className="white-line" />
                            <p>{notes}</p>
                            <div className="subscription-actions">
                                <button onClick={() => {
                                    handleEditSubscription(subIndex)
                                }} className="button-card">
                                    <i className="fa-solid fa-pen-to-square"></i>
                                    Edit
                                </button>
                                <button onClick={() => {
                                    handleDeleteSubscription(subIndex)
                                }} className="button-card">
                                    <i className="fa-solid fa-trash"></i>
                                    Delete
                                </button>
                            </div>
                        </div>
                    )
                })}
                <button onClick={handleShowInput} className="button-card add-subscriptions">
                    <i className="fa-solid fa-plus"></i>
                    <h5>Add new subscription</h5>
                </button>
            </div>
        </section>
    )
}