export default function Footer() {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
            <aside>
            <img src="/favicon.ico" alt="Roastify Logo" className="w-12 h-12 " />
                <p className="text-base">
                    <b>Roastify</b>
                    <br />
                    Humbling people since 2024.
                    <br />
                    Copyright 2025 - all rights reserved.
                </p>

            </aside>
            <nav>
                <h4 className="footer-title text-base">Links</h4>
                <a className="link link-hover text-base">About</a>
            </nav>
            <nav>
                <h6 className="footer-title text-base">Legal</h6>
                <a className="link link-hover text-base" href="/terms">Terms of use</a>
                <a className="link link-hover text-base" href="/privacy">Privacy policy</a>
            </nav>
        </footer>
    );
}
