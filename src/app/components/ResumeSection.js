// components/ResumeSection.js
import { Box, Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ResumeSection = ({ title, children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger just once
  });

  const variants = {
    hidden: { opacity: 0, rotate: -10 },
    show: {
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1
      }
    }
  };

  return (
    <Card 
      ref={ref} 
      component={motion.div} 
      variants={variants} 
      initial="hidden" 
      animate={inView ? 'show' : 'hidden'}
      sx={{ mb: 3 }}
    >
      <CardContent>
        <Typography variant="h5" component="div" className="rainbow-text">
          {title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {children}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ResumeSection;
