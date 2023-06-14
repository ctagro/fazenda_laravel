import React, { useState } from "react";
import pimentao from "./pimentao.jpg";
import tomate from "./tomate.jpg";
import batata from "./batata.jpg";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import { useForm, router } from "@inertiajs/react";

import Input from "postcss/lib/input";

export const List = ({ productLists }) => {
    const [
        selectedItem,
        setSelectedItem,
        data,
        setData,
        post,
        processing,
        reset,
        errors,
    ] = useState({
        nome: "",
    });

    const product = selectedItem;

    function handleSubmit(e) {
        e.preventDefault();

        router.post("productResearch", product);
    }

    const handleSelectItem = (event) => {
        setSelectedItem(event.target.value);
    };
    const selectedItemImage = productLists.find(
        (item) => productList.value === selectedItem
    )?.image;

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center ">
                <div className="flex">
                    <select
                        className="  rounded-lg "
                        value={selectedItem}
                        onChange={handleSelectItem}
                    >
                        <option>Produto</option>
                        {productLists.map((productList) => (
                            <option
                                key={productList.id}
                                value={productList.nome}
                            >
                                {productList.nome}
                            </option>
                        ))}
                    </select>
                    <button className="p-2 bg-[#8BC83F] mx-2 rounded-lg ">
                        Search
                    </button>
                </div>

                {selectedItemImage && (
                    <div>
                        <h3>Selected Item Image:</h3>
                        <img src={selectedItemImage} alt={selectedItem} />
                    </div>
                )}
            </div>
        </form>
    );
};

export default List;
