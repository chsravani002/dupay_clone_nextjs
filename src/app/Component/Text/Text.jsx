import styles from './Text.module.css'

export default function Text({tag = 'p', fsize = 'm', ffamily = 'Ariel',classNames = '', children}) {
    const getfSizeClass = () => {
        return  (fsize === 's' && 'tsmall') ||
        (fsize === 'm' && 'tmedium') ||
        (fsize === 'l' && 'tlarge') || 'm';
    }

    const Component = tag;
    const size = getfSizeClass();

    return (
        <Component className={`${styles[size]} ${classNames}`}>
            {children}
        </Component>
    )
}