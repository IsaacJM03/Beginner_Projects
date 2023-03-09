<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* transactions/index.twig */
class __TwigTemplate_79cd281c372858040b163105268e11b9 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'stylesheets' => [$this, 'block_stylesheets'],
            'javascripts' => [$this, 'block_javascripts'],
            'title' => [$this, 'block_title'],
            'content' => [$this, 'block_content'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "layout.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $this->parent = $this->loadTemplate("layout.twig", "transactions/index.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_stylesheets($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 4
        echo "    ";
        $this->displayParentBlock("stylesheets", $context, $blocks);
        echo "
    ";
        // line 5
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackLinkTags("transactions");
        echo "
";
    }

    // line 8
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 9
        echo "    ";
        $this->displayParentBlock("javascripts", $context, $blocks);
        echo "
    ";
        // line 10
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("transactions");
        echo "
";
    }

    // line 13
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        echo "Transactions";
    }

    // line 15
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 16
        echo "    <div class=\"transactions container content-body\">
        <div class=\"text-end mb-4\">
            <button type=\"button\" class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#importTransactionsModal\">
                <i class=\"bi bi-plus-circle me-1\"></i>
                Import Transactions
            </button>
            <button type=\"button\" class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#newTransactionModal\">
                <i class=\"bi bi-plus-circle me-1\"></i>
                New Transaction
            </button>
        </div>
        ";
        // line 27
        $this->loadTemplate("transactions/transaction_modal.twig", "transactions/index.twig", 27)->display(twig_array_merge($context, ["modal" => ["title" => "Create Transaction", "id" => "newTransactionModal", "isEdit" => false]]));
        // line 28
        echo "        ";
        $this->loadTemplate("transactions/transaction_modal.twig", "transactions/index.twig", 28)->display(twig_array_merge($context, ["modal" => ["title" => "Edit Transaction", "id" => "editTransactionModal", "isEdit" => true]]));
        // line 29
        echo "        ";
        $this->loadTemplate("transactions/upload_receipt_modal.twig", "transactions/index.twig", 29)->display($context);
        // line 30
        echo "        ";
        $this->loadTemplate("transactions/import_transactions_modal.twig", "transactions/index.twig", 30)->display($context);
        // line 31
        echo "        <div>
            <table id=\"transactionsTable\">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Receipt(s)</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>
";
    }

    public function getTemplateName()
    {
        return "transactions/index.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  114 => 31,  111 => 30,  108 => 29,  105 => 28,  103 => 27,  90 => 16,  86 => 15,  79 => 13,  73 => 10,  68 => 9,  64 => 8,  58 => 5,  53 => 4,  49 => 3,  38 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "transactions/index.twig", "/var/www/resources/views/transactions/index.twig");
    }
}
