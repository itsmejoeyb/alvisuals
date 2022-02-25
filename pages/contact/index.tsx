import AnimatedLine from '../../components/AnimatedLine'
import AnimatedText from '../../components/AnimatedText'
import Layout from '../../components/Layout'

const index = () => {
    return (
        <Layout title="Contact" description="Contact us! We would love to work with you.">
            <AnimatedLine delay={0.2} title="CONTACT US" emoji="☎️" />
            <AnimatedText line1="Let's Capture" line2="Your Story Together" />
        </Layout>
    )
}

export default index