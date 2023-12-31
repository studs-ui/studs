import { StudsDropdown } from './components/StudsDropdown'
import { StudsChip } from './components/StudsChip'
import { StudsAccordionItem } from './components/StudsAccordionItem'
import { StudsAccordion } from './components/StudsAccordion'
import { StudsButton } from './components/StudsButton'

export const App = () => {
    return (
        <>
        <StudsChip deletable>Chip</StudsChip>
        <StudsButton>Button</StudsButton>
        <StudsAccordion>
            <StudsAccordionItem>
                <h1>Accordion item</h1>
                <p>Accordion item content</p>
            </StudsAccordionItem>
        </StudsAccordion>
        <StudsDropdown options={[
            {
                "value": "1",
                "label": "Option 1"
            },
            {
                "value": "2",
                "label": "Option 2"
            },
            {
                "value": "3",
                "label": "Option 3"
            },
            {
                "value": "4",
                "label": "Option 4"
            }
            ]} selected="2"/>
        </>
    )
}