import { Container } from "@/components/zippystarter/container";

export default function ContactUs() {
    return (
        <Container
            id="contact"
            className="py-24 border-t border-border bg-muted/20"
        >
            <div className="max-w-2xl mx-auto rounded-xl border border-border bg-card p-8">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold tracking-tighter">
                        Get in Touch
                    </h2>

                    <p className="text-muted-foreground mt-2">
                        Have questions or feedback? We'd love to hear from you.
                    </p>
                </div>

                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full rounded-md border border-border bg-background px-4 py-2"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full rounded-md border border-border bg-background px-4 py-2"
                    />

                    <textarea
                        placeholder="Your Message"
                        rows={5}
                        className="w-full rounded-md border border-border bg-background px-4 py-2"
                    />

                    <button
                        type="submit"
                        className="w-full rounded-md bg-primary px-4 py-2 text-primary-foreground"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </Container>
    );
}