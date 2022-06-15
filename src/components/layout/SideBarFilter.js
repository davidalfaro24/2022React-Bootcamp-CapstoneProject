/* eslint-disable max-len */
import { DivWrapper, FilterBy, ContainerFilter, RemoveFilterBTN } from "../styles/SideBar.styles";

const SideBarFilter = (props) => {
    return (
        <>
            <DivWrapper>
                <FilterBy >Filter By</FilterBy>
                <RemoveFilterBTN onClick={props.removeFilter}>Remove Filters</RemoveFilterBTN>
                {props.categories.results.map((category) => (
                    <ContainerFilter key={category.id} theme={props.activeCategories.includes(category.id)} onClick={() => {
                        props.handleFilter(category.id);
                    }}> {category.data.name}
                    </ContainerFilter>
                ))}
            </DivWrapper>
        </>
    )
}

export default SideBarFilter;