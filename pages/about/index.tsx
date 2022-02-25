import AnimatedLine from '../../components/AnimatedLine'
import AnimatedText from '../../components/AnimatedText'
import Layout from '../../components/Layout'

const index = () => {
    return (
        <Layout title="About" description="A little about who we are and what we do.">
            <AnimatedLine delay={0.2} title="ABOUT US" emoji="📝" />
            <AnimatedText line1="Cinematography," line2="and So Much More" />
        </Layout>
    )
}

export default index