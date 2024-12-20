export default function Footer() {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
            <aside>
            <img src="/favicon.ico" alt="Roastify Logo" className="w-12 h-12" />
                <p>
                    <b>Roastify</b>
                    <br />
                    Humbling people since 2024.
                    <br />
                    Copyright 2025 - all rights reserved.
                </p>

            </aside>
            <nav>
                <h6 className="footer-title">Links</h6>
                <a className="link link-hover">About</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover" href="/terms">Terms of use</a>
                <a className="link link-hover" href="/privacy">Privacy policy</a>
            </nav>
        </footer>
    );
}
