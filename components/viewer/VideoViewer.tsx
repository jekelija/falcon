import styles from './VideoViewer.module.scss';

//TODO iframe or video tag depending on content

export default function VideoViewer() {
    return (
        <>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/HIj8wU_rGIU?si=w0x4kS6-z0iEhBL3"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
        </>
    );
}
