import CodeViewer from '@components/viewer/CodeViewer';
import VideoViewer from '@components/viewer/VideoViewer';

export default function Viewer() {
    return (
        <div className="container">
            <VideoViewer></VideoViewer>
            <CodeViewer></CodeViewer>
        </div>
    );
}
