export default function Footer() {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
            <aside>
            <img src="/favicon.ico" alt="Roast Generator Logo" className="w-12 h-12 " />
                <p className="text-base">
                    <b className="font-heading">Body Fat Estimator</b>
                    <br />
                    Made with 🧃 by <a href="https://x.com/skoyig" className="underline">Matt</a>
                    <br />
                    Copyright 2025 - all rights reserved.
                </p>

            </aside>
            <nav>
                <h4 className="footer-title font-heading text-lg">Links</h4>
                <p><a className="link link-hover" href="#pricing">Pricing</a></p>
            </nav>
            <nav>
                <h4 className="footer-title font-heading text-lg">Legal</h4>
                <p><a className="link link-hover" href="/terms">Terms of use</a></p>
                <p><a className="link link-hover" href="/privacy">Privacy policy</a></p>
            </nav>
            <nav>
                <h4 className="footer-title font-heading text-lg">From The Maker</h4>
                <p><a className="link link-hover " href="https://roastgenerator.com/">Roast Generator</a></p>
            </nav>
        </footer>
    );
}
