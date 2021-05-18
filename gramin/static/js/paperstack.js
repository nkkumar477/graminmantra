(function($) {
    $.fn.visible = function(visible) {
        if (visible) {
            this.show();
        } else {
            this.hide();
        }
    };

    $.fn.paperstack = function(options) {
        this.sheets = this.children();
        this.currentPage = 0;
        
        this.nextBtn = $(options.next);
        this.prevBtn = $(options.prev);

        this.next = () => {
            if (this.currentPage < this.sheets.length - 1) {
                this.currentPage++;
                this.sheetOrder.unshift(this.sheetOrder.pop());
                this._changePage('next');
            }
        };

        this.previous = () => {
            if (this.currentPage > 0) {
                this.currentPage--;
                this.sheetOrder.push(this.sheetOrder.shift());
                this._changePage('prev');
            }

        };
        
        this.nextBtn.click(this.next);
        this.prevBtn.click(this.previous);

        this.setPage = function(pageNum) {
            if (pageNum > this.sheets.length) {
                pageNum = this.sheets.length;
            } else if (pageNum < 0) {
                pageNum = 0;
            }

            let diff = pageNum - this.currentPage;
            let func = diff > 0 ? this.next : this.previous;

            let counter = 0;
            let interval = setInterval(() => {
                func();
                if (++counter > Math.abs(diff)) {
                    clearInterval(interval);
                }
            }, 100);
        };

        this._changePage = (source) => {
            let toMove;
            switch (source) {
                case 'next':
                    toMove = $(this.sheets[this.currentPage - 1]);
                    break;
                case 'prev':
                    toMove = $(this.sheets[this.currentPage]);
                    break;
                case 'set':
                    toMove = $(this.sheets[this.currentPage]);
            }

            if (toMove) {
                toMove.css('left', '120%');
                toMove.css('z-index', this.sheets.length + 1);
                setTimeout(() => {
                    toMove.css('left', '0');
                    this._arrangeSheets(source);
                }, 300);
            } else {
                this._arrangeSheets(source);
            }
        };

        this._arrangeSheets = (source) => {
            for (let i = 0; i < this.sheets.length; i++) {
                let sheet = $(this.sheets[i]);

                sheet.css('z-index', (this.sheets.length - this.sheetOrder[i]) + 1);

                if (source === 'initial') {
                    if (i == this.currentPage) {
                        sheet.css('transform', 'translateY(-' + Math.round((Math.random() * 15)) + 'px');
                    } else {
                        sheet.css('transform', 'translateY(0px)');
                    }
                }

            }

            $(this.sheets[this.currentPage]).css('transform', 'translateY(0px)');
            if (source === 'next') {
                $(this.sheets[this.currentPage - 1]).css('transform', 'translateY(-' + Math.round(Math.random() * 15) + 'px');
            } else if (source === 'prev') {
                $(this.sheets[this.currentPage + 1]).css('transform', 'translateY(-' + Math.round(Math.random() * 15) + 'px');
            }
        };

        this.sheetOrder = Array.from(Array(this.sheets.length).keys());
        this._changePage('initial');

        return this;
    };

}(jQuery));