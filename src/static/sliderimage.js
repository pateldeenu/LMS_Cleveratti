import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import IconS from 'react-native-vector-icons/EvilIcons';
import Styles from '../style/HomeScreenStyle';

export const carouselItems = [
    {
        title: 'Digital Marketing',
        paregraphtitle: 'Python for Data Science Intermediated Level',
        imge: <Image style={Styles.imagsetstyle} resizeMode="stretch" source={require('../image/a.png')} />
    },
    {
        title: 'App Development',
        paregraphtitle: 'Python programing Masterclass',
        imge: <Image style={Styles.imagsetstyle} resizeMode="stretch" source={require('../image/a.png')} />
    },
    {
        title: 'Robotics',
        paregraphtitle: 'Data Science With Python',
        imge: <Image style={Styles.imagsetstyle} resizeMode="stretch" source={require('../image/a.png')} />
    },
    {
        title: 'Data Science Training',
        paregraphtitle: 'Tableau Certification training',
        imge: <Image style={Styles.imagsetstyle} resizeMode="stretch" source={require('../image/a.png')} />,

    },
    {
        title: 'Software Testing',
        paregraphtitle: 'Jenking Beginner Course',
        imge: <Image style={Styles.imagsetstyle} resizeMode="stretch" source={require('../image/a.png')} />
    },
];

export const carouselItemstwo = [
    {
        roundimagtitle: 'Aws Certification',
        imge: <Image style={{ width: 130, borderRadius: 100, height: 130 }} resizeMode='cover' source={require('../image/b.png')} />,

    },
    {
        roundimagtitle: 'Digital Marketing',
        imge: <Image style={{ width: 130, borderRadius: 100, height: 130 }} resizeMode='cover' source={require('../image/b.png')} />
    },
    {
        roundimagtitle: 'Devops Training',
        imge: <Image style={{ width: 130, borderRadius: 100, height: 130 }} resizeMode='cover' source={require('../image/b.png')} />
    },
    {
        roundimagtitle: 'Dtabases',
        imge: <Image style={{ width: 130, borderRadius: 100, height: 130 }} resizeMode='cover' source={require('../image/b.png')} />
    },
    {
        roundimagtitle: 'Operating Systems',
        imge: <Image style={{ width: 130, borderRadius: 100, height: 130 }} resizeMode='cover' source={require('../image/b.png')} />,

    },
    {
        roundimagtitle: 'Developing',
        imge: <Image style={{ width: 130, borderRadius: 100, height: 130 }} resizeMode='cover' source={require('../image/b.png')} />
    },
    {
        roundimagtitle: 'Big Data',
        imge: <Image style={{ width: 130, borderRadius: 100, height: 130 }} resizeMode='cover' source={require('../image/b.png')} />
    },
];
export const carouselItemsthree = [
    {
        whitebodyimagetext: 'Console Development Basics with Unity',
        blacktitle: 'AWS Monitoring and Logging',

        icon: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon2: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon3: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon4: <Icon
        size={15}
        name="star"
        style={Styles.stariconstyle}
    />,
        icon5: <IconS
            size={15}
            name="star"
            style={Styles.chengecolorstyle}
        />,
        blacktitledigit2: '$49',
        imge: <Image style={Styles.imagsetstylesetthreeslider} source={require('../image/c.png')} />,

    },
    {
        whitebodyimagetext: 'Design Instruments for Communication',
        blacktitle: 'AWS Solution Architest Associatel Level|SAA-C02 2021',

        icon: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon2: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon3: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon4: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon5: <Icon
        size={15}
        name="star"
        style={Styles.stariconstyle}
    />,
        blacktitledigit2: '$59',
        imge: <Image style={Styles.imagsetstylesetthreeslider} source={require('../image/c.png')} />
    },
    {
        whitebodyimagetext: 'How to be a DJ? Make Electronic Music',
        blacktitle: 'AWS Certified Developer Associate 2021',

        icon: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon2: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon3: <Icon
        size={15}
        name="star"
        style={Styles.stariconstyle}
    />,
        icon4: <Icon
        size={15}
        name="star"
        style={Styles.stariconstyle}
    />,
        blacktitledigit2: '$59',
        imge: <Image style={Styles.imagsetstylesetthreeslider} source={require('../image/c.png')} />
    },
    {
        whitebodyimagetext: 'Weight Training Courses with Any Di',
        blacktitle: 'AWS Sysops Administrator Associate',

        icon: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon2: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon3: <Icon
        size={15}
        name="star"
        style={Styles.stariconstyle}
    />,
        icon4: <Icon
        size={15}
        name="star"
        style={Styles.stariconstyle}
    />,
        icon5: <IconS
            size={15}
            name="star"
            style={Styles.chengecolorstyle}
        />,
        blacktitledigit2: '$64',
        imge: <Image style={Styles.imagsetstylesetthreeslider} source={require('../image/c.png')} />,
    },
];
export const carouselItemsfour = [
    {
        whitebodyimagetext: 'Design Instruments for Communication',
        blacktitle: 'GIT and GIT Hub Completed Course',

        icon: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon2: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon3: <Icon
        size={15}
        name="star"
        style={Styles.stariconstyle}
    />,
        icon4: <Icon
        size={15}
        name="star"
        style={Styles.stariconstyle}
    />,
        icon5: <Icon
        size={15}
        name="star"
        style={Styles.stariconstyle}
    />,
        blacktitledigit2: '$59',
        imge: <Image style={Styles.imagsetstylesetthreeslider} resizeMode='cover' source={require('../image/c.png')} />,

    },
    {
        whitebodyimagetext: 'Design Instruments for Communication',
        blacktitle: 'Docker Beginner Courses',

        icon: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon2: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon3: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon4: <IconS
            size={15}
            name="star"
            style={Styles.chengecolorstyle}
        />,

        blacktitledigit2: '$64',
        imge: <Image style={Styles.imagsetstylesetthreeslider} resizeMode='cover' source={require('../image/c.png')} />
    },
    {
        whitebodyimagetext: 'How to be a DJ? Make Electronic Music',
        blacktitle: 'Jenking Beginner Course',

        icon: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon2: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon3: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon4: <Icon
        size={15}
        name="star"
        style={Styles.stariconstyle}
    />,
        icon5: <Icon
        size={15}
        name="star"
        style={Styles.stariconstyle}
    />,

        blacktitledigit2: '$49',
        imge: <Image style={Styles.imagsetstylesetthreeslider} resizeMode='cover' source={require('../image/c.png')} />
    },
    {
        whitebodyimagetext: 'Selenium WebDriver With Java-Basics to Advanced',
        blacktitle: 'Electronic',

        icon: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon2: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon3: <Icon
        size={15}
        name="star"
        style={Styles.stariconstyle}
    />,
        icon4: <Icon
        size={15}
        name="star"
        style={Styles.stariconstyle}
    />,
        blacktitledigit2: '$59',
        imge: <Image style={Styles.imagsetstylesetthreeslider} resizeMode='cover' source={require('../image/c.png')} />,
    },
];
export const carouselItemsfive = [
    {
        username: 'Haresh',
        userjob: 'Teacher',
        icon: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon2:<Icon
        size={15}
        name="star"
        style={Styles.stariconstyle}
    />,
        icon3: <IconS
            size={15}
            name="star"
            style={Styles.chengecolorstyle}
        />,

        userrankingtwo: '(7.4k Reviews)',
        imge: <Image style={{ width: 120, borderRadius: 100, height: 120 }} source={require('../image/c.png')} />,

    },
    {
        username: 'Alpesh',
        userjob: 'Marketing Consultant',

        icon: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon2: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon3: <Icon
        size={15}
        name="star"
        style={Styles.stariconstyle}
    />,

        userrankingtwo: '(15.2k Reviews)',
        imge: <Image style={{ width: 120, borderRadius: 100, height: 120 }} source={require('../image/c.png')} />
    },
    {
        username: 'Vijay',
        userjob: 'C++ Expert',

        icon: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon2: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon3: <Icon
        size={15}
        name="star"
        style={Styles.stariconstyle}
    />,
        userrankingtwo: '(131k Reviews)',
        imge: <Image style={{ width: 120, borderRadius: 100, height: 120 }} source={require('../image/c.png')} />
    },
    {
        username: 'Prinkesh',
        userjob: 'Fitness Instructor',

        icon: <Icon
        size={15}
        name="star"
        style={Styles.stariconstyle}
        />,
        icon2: <Icon
        size={15}
        name="star"
        style={Styles.stariconstyle}
        />,
        icon3: <Icon
        size={15}
        name="star"
        style={Styles.stariconstyle}
        />,
        userrankingtwo: '(149k Reviews)',
        imge: <Image style={{ width: 120, borderRadius: 100, height: 120 }} source={require('../image/homeslider4.png')} />,
    },
    {
        username: 'Hasmukh',
        userjob: 'Flutter Expert',

        icon: <Icon
            size={15}
            name="star"
            style={Styles.stariconstyle}
        />,
        icon2: <Icon
        size={15}
        name="star"
        style={Styles.stariconstyle}
        />,
        icon3: <Icon
        size={15}
        name="star"
        style={Styles.stariconstyle}
        />,
        userrankingtwo: '(184k Reviews)',
        imge: <Image style={{ width: 120, borderRadius: 100, height: 120 }} source={require('../image/homeslider4.png')} />,
    },
];





export const carouselItemoverviewtabslider = [
    {
        roundimagtitle: 'Full Language',
        imge: <Image style={{ width: 180, borderRadius: 20, height: 180 }} resizeMode='stretch' source={require('../image/overviewslider.png')} />,

    },
    {
        roundimagtitle: 'Practicals',
        imge: <Image style={{ width: 180, borderRadius: 20, height: 180 }} resizeMode='stretch' source={require('../image/overviewslider.png')} />
    },
    {
        roundimagtitle: 'Full Language',
        imge: <Image style={{ width: 180, borderRadius: 20, height: 180 }} resizeMode='stretch' source={require('../image/overviewslider.png')} />
    },
    {
        roundimagtitle: 'Full Language',
        imge: <Image style={{ width: 180, borderRadius: 20, height: 180 }} resizeMode='stretch' source={require('../image/overviewslider.png')} />,

    },

];


export const overviewsliderimg = [
    {
        roundimagtitle: 'Art & photography',
        imge: <Image style={{ width: 150, borderRadius: 7, height: 150 }} source={require('../image/overviewslider.png')} />

    },
    {
        roundimagtitle: 'Health & Fitness',
        imge: <Image style={{ width: 150, borderRadius: 7, height: 150 }} source={require('../image/overviewslider.png')} />
    },
    {
        roundimagtitle: 'Business & Marketing',
        imge: <Image style={{ width: 150, borderRadius: 7, height: 150 }} source={require('../image/overviewslider.png')} />
    },
    {
        roundimagtitle: 'Computer Science',
        imge: <Image style={{ width: 150, borderRadius: 7, height: 150 }} source={require('../image/overviewslider.png')} />,

    },
    {
        roundimagtitle: '3D Priting Concept',
        imge: <Image style={{ width: 150, borderRadius: 7, height: 150 }} source={require('../image/overviewslider.png')} />
    },
    {
        roundimagtitle: 'Electronic',
        imge: <Image style={{ width: 150, borderRadius: 7, height: 150 }} source={require('../image/overviewslider.png')} />
    },
];