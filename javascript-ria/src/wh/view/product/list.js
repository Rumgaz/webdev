Ext.define('wh.view.product.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.productlist',

    title : 'Список товаров',
    store: 'Products',

    columns: [
        {header: 'Наименование',  dataIndex: 'name',  flex: 1},
        {header: 'Цена', dataIndex: 'price', flex: 1},
        {header: 'Количество', dataIndex: 'amount', flex: 1},
        {header: 'За всё', dataIndex: 'total', flex: 1}
    ]
});