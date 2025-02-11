import Link from "next/link";

export default function Hero() {
    return (
        <div className="hero-section">
            {/* is for the text */}
            <div>
                <p className="header-text">
                    Gain control<br />of your<br />subscriptions
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#030615" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"></path></svg>
                </p>
                <p className="text-medium">Measure, analyse and track your subscriptions with Expenny.</p>
                <Link href={'/dashboard'}>
                    <button><h5>Get started &rarr;</h5></button>
                </Link>
                <small>Free to use. No credit card required.</small>
            </div>

            {/* is for the visual display */}
            <div className="hero-display">
                {/* column number 1 */}
                <div>
                    <div className="card">
                        <div>
                            <div className="card-header"></div>
                            <div className="card-blank"></div>
                            <div className="card-description-large" />
                            <div className="card-description-small" />
                        </div>
                        <div className="card-square" />
                    </div>
                    <div className="card">
                        <div>
                            <div className="card-header"></div>
                            <div className="card-blank"></div>
                            <div className="card-description-large" />
                            <div className="card-description-small" />
                        </div>
                        <div className="card-square" />
                    </div>
                </div>

                {/* column number 2 */}
                <div>
                    <div className="card">
                        <div>
                            <div className="card-header"></div>
                            <div className="card-blank"></div>
                            <div className="card-description-large" />
                            <div className="card-description-small" />
                        </div>
                        <div className="card-square" />
                    </div>
                    <div className="card">
                        <div>
                            <div className="card-header"></div>
                            <div className="card-blank"></div>
                            <div className="card-description-large" />
                            <div className="card-description-small" />
                        </div>
                        <div className="card-square" />
                    </div>
                </div>
            </div>
        </div>
    )
}