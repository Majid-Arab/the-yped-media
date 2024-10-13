import { Container, Title, Text } from '@mantine/core';
import classes from './CapabilitySection.module.css';
import VerticalText from './VerticalText';

const mockdata = [
    {
        title: 'Web Design',
        services: [
            { id: 1, service: "Web Design" },
            { id: 2, service: "Mobile Design" },
            { id: 3, service: "UI/UX" }
        ]
    },
    {
        title: 'Web Development',
        services: [
            { id: 1, service: "Web Animation" },
            { id: 2, service: "Web Development" }
        ]
    },
    // Add more sections as needed
];

export function CapabilitySection() {
    return (
        <div className={classes.root}>
            <Container size="full">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            AT OUR STUDIO CREATIVITY TAKES CENTER STAGE
                            DELIVERING SOLUTIONS THAT EXCEEDS EXPECTATION
                        </Title>
                    </div>
                    <div className={classes.subContent}>
                        <Text className={classes.subText}>
                            Our Capabilities
                        </Text>
                        <Text className={classes.subText}>
                            You have the option to order a full website creation
                            or individual service as needed
                        </Text>
                    </div>

                    <hr style={{ border: "1px solid #fff", marginTop: "5px" }} />

                    {mockdata.map((item, index) => (
                        <div key={index} className={classes.listBox}>
                            {/* Render VerticalText for each section */}
                            <VerticalText title={item.title} />

                            {/* Render list of services dynamically */}
                            <div className={classes.list}>
                                {item.services.map((service) => (
                                    <h2 key={service.id} className={classes.item}>
                                        <span>{`0${service.id}`}</span> {service.service}
                                    </h2>
                                ))}
                            </div>
                        </div>
                    ))}

                    <hr style={{ border: "1px solid #fff", marginTop: "5px" }} />
                </div>
            </Container>
        </div>
    );
}
