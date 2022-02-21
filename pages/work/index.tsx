import AnimatedLine from "../../components/AnimatedLine";
import AnimatedText from "../../components/AnimatedText";
import Layout from "../../components/Layout";

const index = () => {
    return (
        <Layout title="Work" description="A collection of our previous work." bg="">
            <AnimatedLine delay={.2} title="OUR WORK"/>
            <AnimatedText line1="Your Stories" line2="Brought to Life" />
        </Layout>
    );
}

export default index;